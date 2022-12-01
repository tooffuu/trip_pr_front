import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../../utils/env";
import { profileState, userState } from "../../recoil";
import { useRecoilState } from "recoil";

const UpdateProfileImage = () => {
  const [user, setUser] = useRecoilState(userState);
  const [memberId, setMemberId] = useState(user && user.memberId);
  const [imgFile, setImgFile] = useState(null);
  const [imgBase64, setImgBase64] = useState("");
  const [imgList, setImgList] = useState([]);
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

  // 프로필 이미지 db저장
  const uploadImg = async (e) => {
    const formData = new FormData();
    for (let i = 0; i < imgFile.length; i++) {
      formData.append("file", imgFile[i]);
    }
    await axios({
      method: "POST",
      url: `${BACKEND_URL}/image/profile`,
      params: {
        memberId,
      },
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
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // 이미지 불러오기
  const showProfileImage = async (e) => {
    const data = await axios({
      url: `${BACKEND_URL}/image/showProfile/${memberId}`,
      method: "GET",
    })
      .then((response) => {
        setImgList(imagePath + response.data);
        setProfileImg(imagePath + response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    showProfileImage();
  }, []);

  return (
    <div className="file_upload_box">
      <div className="file_box">
        {/* 이미지 미리보기 */}
        {imgBase64 ? (
          <img src={imgBase64} alt="preview-img" />
        ) : (
          <img src={imgList} />
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
      <button className="upload_photo_btn" onClick={uploadImg}>
        사진등록
      </button>
    </div>
  );
};

export default UpdateProfileImage;
