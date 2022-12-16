import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../../recoil";
import { BACKEND_URL } from "../../../utils/env";
import Topbar2 from "../../main/Topbar2";
import PhotographyList from "./PhotographyList";
import "../../../style/board/Photography.scss";

const Photography = () => {
  const [user, setUser] = useRecoilState(userState);
  const [photoPosts, setPhotoPosts] = useState([]);

  useEffect(() => {
    const getData = async (e) => {
      const data = await axios({
        url: `${BACKEND_URL}/board/photo`,
        method: "GET",
      });
      setPhotoPosts(data.data);
    };
    getData();
  }, []);

  return (
    <>
      <Topbar2 />
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
          <div className="main_home_contents">
            <div className="popular_contents">
              <p className="popular_contents_p">사진자랑 🦝</p>
              <button
                className="board_write_button board_write_active"
                onClick={() => {
                  if (!user) {
                    alert("로그인을 해주세요.");
                    window.location.href = "/login";
                  } else {
                    window.location.href = "/photo/write";
                  }
                }}
              >
                글 작성하기
              </button>
            </div>
            {/* 카테고리 선택 */}
            <div className="button_list">
              <select name="zone" className="zone_list">
                <option value="all">전국</option>
                <option value="seoul">서울</option>
                <option value="gyeonggi">경기</option>
                <option value="gangwon">강원</option>
                <option value="chungnam_daejeon">충남·대전</option>
                <option value="chungbuk">충북</option>
                <option value="gwangju">전남·광주</option>
                <option value="jeonbuk">전북</option>
                <option value="gyeongnam">경남</option>
                <option value="daegu">경북·대구</option>
                <option value="jeju">제주</option>
              </select>
            </div>
            <div className="board_background">
              <PhotographyList photoPosts={photoPosts} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photography;
