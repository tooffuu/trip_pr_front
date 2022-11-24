import axios from "axios";
import React, { useState } from "react";
import { BACKEND_URL } from "../../utils/env";

const UpdateProfileImage = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [file, setFile] = useState();

  // 썸네일 추출
  const setThumbnail = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  // 이미지 저장
  const onImgChange = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      const response = await axios.post(
        `${BACKEND_URL}/image/profile`,
        formData
      );
      setFile(e.target.files[0]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="file_upload_box">
      <div className="file_box">
        {/* 이미지 미리보기 */}
        {imageSrc && <img src={imageSrc} alt="preview-img" />}
      </div>
      <form onSubmit={onImgChange}>
        <input
          className="file_upload_input"
          type="file"
          name="file"
          accept="image/*"
          // onChange={onImgChange}
          onChange={(e) => {
            setThumbnail(e.target.files[0]);
          }}
        />
        <button className="upload_photo_btn">사진등록</button>
      </form>
    </div>
  );
};

export default UpdateProfileImage;
