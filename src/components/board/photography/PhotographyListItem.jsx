import React from "react";
import { useRecoilState } from "recoil";
import photo001 from "../../../image/photo001.jpg";
import { profileState } from "../../../recoil";

const PhotographyListItem = ({ photoPost }) => {
  const [profileImg, setProfileImg] = useRecoilState(profileState);
  const imagePath = process.env.PUBLIC_URL + "/assets/";
  const profileImgUrl = imagePath + photoPost.member.profile_img_name;

  console.log(photoPost.boardImageList[0].imgUrl);

  return (
    <>
      <div className="board_wrap">
        <div className="board_wrap_writter">
          <img
            className="board_wrap_profile post_writerImg"
            src={profileImgUrl}
          />
          <p className="board_wrap_nick">{photoPost.member.nickname}</p>
        </div>
        <div className="board_list">
          <div className="photo_wrapper">
            <img
              className="board_list_photo"
              // src={photo001}
              src={photoPost?.boardImageList[0].imgUrl}
              onClick={() => {
                window.location.href = `/photo/${photoPost.postId}`;
              }}
            />
          </div>
          <p className="board_list_content">{photoPost.title}</p>
        </div>
      </div>
    </>
  );
};

export default PhotographyListItem;
