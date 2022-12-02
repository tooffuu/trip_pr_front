import React from "react";
import Topbar from "../main/Topbar";
import photo001 from "../../image/photo001.jpg";
import dog from "../../image/dog.jpg";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";

const WritePhoto = () => {
  const [user, setUser] = useRecoilState(userState);

  return (
    <>
      <Topbar />
      <div className="main_body">
        <div className="main_container">
          {/* <div className="main_top_contents">
            <div className="main_top_home home_notHl">
              <a href="/">홈</a>
            </div>
            <div className="main_top_photo main_top_highlight">사진자랑</div>
            <div className="main_top_route">코스공유</div>
            <div className="main_top_mytrip">내 여행지</div>
            <div className="main_top_ticket">티켓판매</div>
          </div> */}
          <div className="main_home_contents">
            <div className="popular_contents">
              <p className="popular_contents_p">사진자랑 🦝</p>
              <button
                className="board_write_button"
                onClick={() => {
                  window.location.href = "/photo/write";
                }}
              >
                작성 취소
              </button>
            </div>
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
              {/* 글 하나 시작 */}
              <div className="board_wrap">
                <div className="board_wrap_writter">
                  <img className="board_wrap_profile" src={dog} alt="" />
                  <p className="board_wrap_nick">
                    {user && `${user.nickname}`}
                    {/* 유저 닉네임 */}
                  </p>
                </div>
                <div className="board_list">
                  <img className="board_list_photo" src={dog} alt="12" />
                  <p className="board_list_content">글 내용 첫 문장만</p>
                </div>
              </div>
              {/* 글 하나 끝 */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WritePhoto;
