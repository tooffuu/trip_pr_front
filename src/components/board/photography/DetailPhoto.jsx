import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../../../utils/env";
import Topbar from "../../main/Topbar";
import "../../../style/board/DetailPhoto.scss";
import { useRecoilState } from "recoil";
import { profileState } from "../../../recoil";

const DetailPhoto = () => {
  const { postId } = useParams();
  const [profileImage, setProfileImage] = useRecoilState(profileState);
  const [photoPost, setPhotoPost] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/board/photo/${postId}`,
        method: "GET",
      });
      setPhotoPost(data.data);
    };
    getData();
  }, []);

  return (
    <>
      <Topbar />
      <div className="main_body">
        <div className="main_container">
          <div className="main_top_contents">
            <div className="main_top_home home_notHl">
              <a href="/">홈</a>
            </div>
            <div className="main_top_photo main_top_highlight">
              <a href="/photo">사진자랑</a>
            </div>
            <div className="main_top_route">코스공유</div>
            <div className="main_top_mytrip">내 여행지</div>
            <div className="main_top_ticket">티켓판매</div>
          </div>
          <div className="main_home_contents write_contents">
            <div className="photo_background">
              <div className="photo_board_list">
                <div className="follow_user">
                  <img className="board_wrap_profile" src={profileImage} />
                  <div className="post_writer">{photoPost.writer}</div>
                  <div className="follow_btn">팔로우</div>
                  <p className="followline">·</p>
                  <div className="post_region">{photoPost.region}</div>
                </div>
                <div className="post_view_count">
                  <p>👀 ({photoPost.view_count})</p>
                  <p className="post_likes">👍 ({photoPost.view_count})</p>
                </div>
                <div className="post_content">
                  <div
                    className="content_box"
                    dangerouslySetInnerHTML={{ __html: `${photoPost.content}` }}
                  ></div>
                  <div className="post_hr" />
                  <div className="commentList">💘 Comments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPhoto;
