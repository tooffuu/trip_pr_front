import React from "react";
import Topbar2 from "../../main/Topbar2";
import "../../../style/board/ShareRoute.scss";

const ShareRoute = () => {
  return (
    <>
      <Topbar2 />
      <div className="main_body">
        <div className="main_container">
          <div className="main_top_contents">
            <div className="main_top_home home_notHl">
              <a href="/">홈</a>
            </div>
            <div className="main_top_photo ">
              <a href="/photo">사진자랑</a>
            </div>
            <div className="main_top_route main_top_highlight">코스공유</div>
            <div className="main_top_mytrip">내 여행지</div>
            <div className="main_top_ticket">티켓판매</div>
          </div>
          <div className="main_home_contents">
            <div className="popular_contents">
              <p className="popular_contents_p">코스공유 🦝</p>
              <h5 className="p_description">나만의 여행코스를 작성해보세요!</h5>
            </div>
            {/* 카테고리 선택 */}
            <div className="map_background">
              {/* 지도 + 루트 background */}
              <div className="route_map">지도</div>
              <div className="add_route">
                <input className="addRouteInput" type="text" />
                <button className="addRouteBtn"> + </button>
                <p>루트 검색 / 추가 삭제</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareRoute;
