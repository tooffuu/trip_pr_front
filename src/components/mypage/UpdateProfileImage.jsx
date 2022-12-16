import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../../utils/env";
import { profileState, userState } from "../../recoil";
import { useRecoilState } from "recoil";

const UpdateProfileImage = () => {
  const [user, setUser] = useRecoilState(userState);
  const [imgFile, setImgFile] = useState(null);
  const [imgBase64, setImgBase64] = useState("");
  const [profileImg, setProfileImg] = useRecoilState(profileState);

  const imagePath = process.env.PUBLIC_URL + "/assets/";

  // 이미지 미리보기
  const handleChangeFile = (e) => {
    setImgFile(e.target.files);
    setImgBase64([]);
    for (let i = 0; i < e.target.files.length; i++) {
      if (e.target.files[i]) {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        reader.onloadend = () => {
          const base64 = reader.result;
          if (base64) {
            const base64Sub = base64.toString();
            setImgBase64((imgBase64) => [...imgBase64, base64Sub]);
          }
        };
      }
    }
  };

  // 프로필 이미지 변경
  const uploadImg = async (e) => {
    const formData = new FormData();
    for (let i = 0; i < imgFile.length; i++) {
      formData.append("file", imgFile[i]);
    }
    await axios({
      url: `${BACKEND_URL}/member/updateProfileImg/${user.id}`,
      method: "PATCH",
      headers: {
        "Content-Type": `multipart/form-data`,
      },
      data: formData,
    })
      .then((response) => {
        if (response.data) {
          setImgFile(null);
          setImgBase64([]);
          alert("등록되었습니다.");
          window.location.href = "/myprofile";
        }
      })
      .catch((e) => {
        if (imgFile[0].size > 1048576) {
          alert("Image size is Over");
        }
        console.log("파일 사이즈 : " + imgFile[0].size);
      });
  };

  const showProfileImage = async (e) => {
    const data = await axios({
      url: `${BACKEND_URL}/member/${user.id}`,
      method: "GET",
    })
      .then((response) => {
        setProfileImg(imagePath + response.data.profile_img_name);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    user && showProfileImage();
  }, []);

  return (
    <div className="file_upload_box">
      <div className="file_box">
        {/* 이미지 미리보기 */}
        {imgBase64 ? (
          <img src={imgBase64} alt="preview-img" />
        ) : (
          <img src={profileImg} />
        )}
      </div>
      <input
        className="file_upload_input"
        id="file"
        type="file"
        name="file"
        accept="image/*"
        onChange={handleChangeFile}
        multiple
      />
      <div className="photo_button">
        <button className="upload_photo_btn" type="submit" onClick={uploadImg}>
          사진등록
        </button>
        <button
          className="upload_photo_btn set_basic_profile"
          // onClick={setBasicImage}
        >
          기본이미지로 변경
        </button>
      </div>
    </div>
  );
};

export default UpdateProfileImage;
