import axios from "axios";
import React, { useState } from "react";
import { BACKEND_URL } from "../../utils/env";
import userImage from "../../image/user.png";
import { userState } from "../../recoil";
import { useRecoilState } from "recoil";

const UpdateProfileImage = () => {
  const [user, setUser] = useRecoilState(userState);
  const [imageSrc, setImageSrc] = useState("");
  const [memberId, setMemberId] = useState(user && user.memberId);
  const [originalImageName, setOriginalImageName] = useState("");

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
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    if (!formData) {
      return;
    }

    const data = await axios({
      method: "POST",
      url: `${BACKEND_URL}/image/profile`,
      params: {
        memberId,
        originalImageName,
      },
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        setOriginalImageName(e.target.files[0].name);
        console.log(e.target.files[0].name);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="file_upload_box">
      <div className="file_box">
        {/* 이미지 미리보기 */}
        {imageSrc && <img src={imageSrc} alt="preview-img" />}
      </div>
      <form onChange={onImgChange}>
        <input
          className="file_upload_input"
          type="file"
          name="file"
          accept="image/*"
          onChange={(e) => {
            setThumbnail(e.target.files[0]);
          }}
        />
        <button
          className="upload_photo_btn"
          // onClick={(e) => {
          //   e.preventDefault();
          // }}
        >
          사진등록
        </button>
      </form>
    </div>
  );
};

export default UpdateProfileImage;
