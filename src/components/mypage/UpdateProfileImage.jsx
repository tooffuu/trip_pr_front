import axios from "axios";
import React, { useState } from "react";
import { BACKEND_URL } from "../../utils/env";
import userImage from "../../image/user.png";
import { userState } from "../../recoil";
import { useRecoilState } from "recoil";

const UpdateProfileImage = () => {
  const [user, setUser] = useRecoilState(userState);
  const [memberId, setMemberId] = useState(user && user.memberId);
  const [imgFile, setImgFile] = useState(null);
  const [imgBase64, setImgBase64] = useState(userImage);
  const [originalFileName, setOriginalFileName] = useState("");

  // 썸네일 추출
  // const setThumbnail = (fileBlob) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(fileBlob);
  //   return new Promise((resolve) => {
  //     reader.onload = () => {
  //       setImageSrc(reader.result);
  //       resolve();
  //     };
  //   });
  // };

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

  // 이미지 저장
  // const onImgChange = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("file", e.target.files[0]);

  //   if (!formData) {
  //     return;
  //   }

  //   const data = await axios({
  //     method: "POST",
  //     url: `${BACKEND_URL}/image/profile`,
  //     params: {
  //       memberId,
  //       originalImageName,
  //     },
  //     data: formData,
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   })
  //     .then((response) => {
  //       setOriginalImageName(e.target.files[0].name);
  //       console.log(e.target.files[0].name);
  //       console.log(response);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  // 파일 이름 불러오기
  const fileName = (e) => {
    setOriginalFileName(e.target.files[0]);
  };
  // 이미지 저장 test
  const uploadImg = async (e) => {
    const formData = new FormData();
    for (let i = 0; i < imgFile.length; i++) {
      formData.append("file", imgFile[i]);
    }

    await axios({
      method: "POST",
      url: `${BACKEND_URL}/image/profile`,
      params: { memberId },
      data: formData,
    })
      .then((response) => {
        if (response.data) {
          setImgFile(null);
          setImgBase64([]);
          console.log("업로드 완료");
        }
      })
      .catch((e) => {
        console.log(e);
        console.log("실패");
      });
  };

  return (
    <div className="file_upload_box">
      <div className="file_box">
        {/* 이미지 미리보기 */}
        {imgBase64 && <img src={imgBase64} alt="preview-img" />}
      </div>
      {/* <form onChange={onImgChange}> */}
      <input
        className="file_upload_input"
        id="file"
        type="file"
        name="file"
        accept="image/*"
        // onChange={(e) => {
        //   setThumbnail(e.target.files[0]);
        // }}
        onChange={handleChangeFile}
        multiple
      />
      <button className="upload_photo_btn" onClick={uploadImg}>
        사진등록
      </button>
      {/* </form> */}
    </div>
  );
};

export default UpdateProfileImage;
