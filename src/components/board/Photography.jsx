import React from "react";
import "../../style/board/Photography.scss";
import photo001 from "../../image/photo001.jpg";
import photo002 from "../../image/photo002.jpg";
import resort001 from "../../image/resort001.jpg";
import tour001 from "../../image/tour001.PNG";
import food001 from "../../image/food001.jpg";
import food002 from "../../image/food002.jpg";
import trip001 from "../../image/trip001.jpg";
import trip002 from "../../image/trip002.jpg";
import Topbar2 from "../main/Topbar2";

const Photography = () => {
  return (
    <>
      <Topbar2 />
      <div className="main_body">
        <div className="main_container">
          <div className="main_top_contents">
            <div className="main_top_home home_notHl">
              <a href="/">홈</a>
            </div>
            <div className="main_top_photo main_top_highlight">사진자랑</div>
            <div className="main_top_route">코스공유</div>
            <div className="main_top_mytrip">내 여행지</div>
            <div className="main_top_ticket">티켓판매</div>
          </div>
          <div className="main_home_contents">
            <div className="popular_contents">
              <p className="popular_contents_p">사진자랑</p>
              <button className="board_write_button">글쓰기</button>
            </div>
            <div className="board_background">게시판 목록 리스트</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photography;
