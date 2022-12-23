import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../../../utils/env";
import Topbar from "../../main/Topbar";
import "../../../style/board/DetailPhoto.scss";
import { useRecoilState } from "recoil";
import { userState } from "../../../recoil";
import Comments from "../Comments";

const DetailPhoto = () => {
  const { postId } = useParams();
  const [user, setUser] = useRecoilState(userState);
  const [photoPost, setPhotoPost] = useState([]);
  const [date, setDate] = useState("");
  const dateTime = date.split("T");
  var number = 0;

  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/board/photo/${postId}`,
        method: "GET",
      });
      setPhotoPost(data.data);
      setDate(data.data.modifiedDate);
    };
    getData();
  }, [postId]);

  const imagePath = process.env.PUBLIC_URL + "/assets/";
  const profileImgUrl = imagePath + photoPost.memberDto?.profile_img_name;

  // 게시글 삭제
  const deletePost = async (e) => {
    if (window.confirm("삭제하시겠습니까?")) {
      e.preventDefault();
      try {
        const data = await axios({
          url: `${BACKEND_URL}/board/photo/${postId}`,
          method: "DELETE",
        });
        alert("삭제 완료");
        window.location.href = "/photo";
      } catch (e) {
        console.log(e);
      }
    }
  };

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
                  <img
                    className="board_wrap_profile post_writerImg"
                    alt="profileImage"
                    src={profileImgUrl}
                  />
                  <div className="post_section">
                    <div className="post_writer">
                      {photoPost.memberDto?.nickname}
                    </div>
                    <div className="follow_btn">팔로우</div>
                    <p className="followline">·</p>
                    <div className="post_region">{photoPost.region}</div>
                  </div>
                </div>
                <div className="post_view_count">
                  <p>👀 ({photoPost.view_count})</p>
                  <p className="post_likes">👍 (0)</p>
                </div>
                <p className="modified_date">
                  {dateTime[0] + " " + dateTime[1]}
                </p>
                <div className="post_content">
                  <div
                    className="content_box"
                    dangerouslySetInnerHTML={{ __html: `${photoPost.content}` }}
                  ></div>
                  <button
                    className="post_like_btn"
                    onClick={() => {
                      console.log((number += 1));
                    }}
                  >
                    👍🏼 추천하기
                  </button>
                  {user && user.memberId === photoPost.memberDto?.memberId && (
                    <div className="post_edit_button">
                      <button
                        className="post_edit_btn"
                        onClick={() => {
                          window.location.href = `/photo/write/${postId}`;
                        }}
                      >
                        수정
                      </button>
                      <button onClick={deletePost}>삭제</button>
                    </div>
                  )}
                  <div className="post_hr" />
                  <div className="commentList">💌 Comments</div>
                </div>
                <div>
                  <Comments />
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
