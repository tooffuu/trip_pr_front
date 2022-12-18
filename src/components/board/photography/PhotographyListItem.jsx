import React from "react";
import { useRecoilState } from "recoil";
import { profileState } from "../../../recoil";

const PhotographyListItem = ({ photoPost, photoPostByRegion, region }) => {
  const [profileImg, setProfileImg] = useRecoilState(profileState);
  const imagePath = process.env.PUBLIC_URL + "/assets/";
  const profileImgUrl = imagePath + photoPost?.memberDto.profile_img_name;
  const profileImgUrlByRegion =
    imagePath + photoPostByRegion?.memberDto.profile_img_name;

  return (
    <>
      {region === "all" || region === "" ? (
        <div className="board_wrap">
          <div className="board_wrap_writter">
            <img
              className="board_wrap_profile post_writerImg"
              src={profileImgUrl}
            />
            <p className="board_wrap_nick">{photoPost.memberDto.nickname}</p>
          </div>
          <div className="board_list">
            <div className="photo_wrapper">
              <img
                className="board_list_photo"
                src={photoPost?.boardImageList[0].imgUrl}
                onClick={() => {
                  window.location.href = `/photo/${photoPost.postId}`;
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
              {photoPostByRegion.member.nickname}
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
