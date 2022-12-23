import axios from "axios";
import React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { profileState, userState } from "../../../recoil";
import { BACKEND_URL } from "../../../utils/env";

const PhotographyListItem = ({ photoPost, photoPostByRegion, region }) => {
  const [user, setUser] = useRecoilState(userState);
  const [view_count, setView_count] = useState(photoPost?.view_count);
  const imagePath = process.env.PUBLIC_URL + "/assets/";
  const profileImgUrl = imagePath + photoPost?.memberDto.profile_img_name;
  const profileImgUrlByRegion =
    imagePath + photoPostByRegion?.memberDto.profile_img_name;
  const id = photoPost?.postId;

  const updateView = async (e) => {
    const data = await axios({
      url: `${BACKEND_URL}/board/updateView/${id}`,
      method: "PATCH",
      data: { view_count: view_count + 1 },
    });
  };

  return (
    <>
      {region === "all" || region === "" ? (
        <div className="board_wrap">
          <div className="board_wrap_writter">
            <img
              className="board_wrap_profile post_writerImg"
              src={profileImgUrl}
            />
            <p className="board_wrap_nick">{photoPost?.memberDto.nickname}</p>
          </div>
          <div className="board_list">
            <div className="photo_wrapper">
              <img
                className="board_list_photo"
                src={photoPost?.boardImageList[0].imgUrl}
                onClick={() => {
                  if (user?.id != photoPost.memberDto?.id) {
                    updateView();
                  }
                  window.location.href = `/photo/${id}`;
                }}
              />
            </div>
            <p className="board_list_content">{photoPost.title}</p>
          </div>
        </div>
      ) : (
        <div className="board_wrap">
          <div className="board_wrap_writter">
            <img
              className="board_wrap_profile post_writerImg"
              src={profileImgUrlByRegion}
            />
            <p className="board_wrap_nick">
              {photoPostByRegion?.memberDto.nickname}
            </p>
          </div>
          <div className="board_list">
            <div className="photo_wrapper">
              <img
                className="board_list_photo"
                src={photoPostByRegion?.boardImageList[0].imgUrl}
                onClick={() => {
                  window.location.href = `/photo/${photoPostByRegion.postId}`;
                }}
              />
            </div>
            <p className="board_list_content">{photoPostByRegion.title}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotographyListItem;
