import React from "react";
import Topbar from "./Topbar";
import "../../style/main/Home.scss";
import photo001 from "../../image/photo001.jpg";
import photo002 from "../../image/photo002.jpg";
import resort001 from "../../image/resort001.jpg";
import tour001 from "../../image/tour001.PNG";
import food001 from "../../image/food001.jpg";
import food002 from "../../image/food002.jpg";
import trip001 from "../../image/trip001.jpg";
import trip002 from "../../image/trip002.jpg";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="main_body">
        <div className="main_container">
          <div className="main_top_contents">
            <div className="main_top_home">홈</div>
            <div className="main_top_photo">사진자랑</div>
            <div className="main_top_route">코스공유</div>
            <div className="main_top_mytrip">내 여행지</div>
            <div className="main_top_ticket">티켓판매</div>
          </div>
          <div className="main_home_contents">
            <div className="popular_contents">
              <p className="popular_contents_p">인기 게시글</p>
              {/* 사진 자랑 인기글 시작*/}
              <div className="home_top_title">
                <p className="home_top_title_p">사진 자랑 🦝</p>
                <div className="popular_content_list">
                  <div className="content_wrap">
                    <img className="popular_content_photo" src={photo001} />
                    <div className="popular_content_title">
                      투명카약 탔어요 ㅎㅎ
                    </div>
                  </div>
                  <div className="content_wrap">
                    <img className="popular_content_photo" src={photo002} />
                    <div className="popular_content_title">
                      강아지랑 제주도 다녀왔어요~
                    </div>
                  </div>
                  <div className="content_wrap">
                    <img className="popular_content_photo" src={food002} />
                    <div className="popular_content_title">
                      제주 돈까스 맛집 !
                    </div>
                  </div>
                  <div className="content_wrap">
                    <img className="popular_content_photo" src={trip002} />
                    <div className="popular_content_title">
                      가을의 대구 83타워 😎
                    </div>
                  </div>
                  <p className="view_more">더보기 >></p>
                </div>
              </div>
              {/* 사진 자랑 인기글 끝*/}
              {/* 티켓 판매 인기글 시작*/}
              <div className="home_top_title">
                <p className="home_top_title_p">티켓 판매 🦝</p>
                <div className="popular_content_list">
                  <div className="content_wrap">
                    <img className="popular_content_photo" src={resort001} />
                    <div className="popular_content_title">
                      [경기] 곤지암리조트 22/23시즌 리프트&렌탈권
                    </div>
                  </div>
                  <div className="content_wrap">
                    <img className="popular_content_photo" src={tour001} />
                    <div className="popular_content_title">
                      [제주] 제주댕댕투어패스 프리패스권/반려견 동반가능스팟
                    </div>
                  </div>
                  <div className="content_wrap">
                    <img className="popular_content_photo" src={food001} />
                    <div className="popular_content_title">
                      [제주] 제주 생돈우리, 30시간 저온 숙성 흑돼지 테이크아웃
                      가능
                    </div>
                  </div>
                  <div className="content_wrap">
                    <img className="popular_content_photo" src={trip001} />
                    <div className="popular_content_title">
                      [마산] 로봇랜드 파크이용권
                    </div>
                  </div>
                  <p className="view_more">더보기 >></p>
                </div>
              </div>
              {/* 티켓 판매 인기글 끝*/}
              {/* 코스 공유 인기글 시작*/}
              <div className="home_top_title">
                <p className="home_top_title_p">코스 공유 🦝</p>
                <div className="popular_content_list">
                  <div className="content_wrap">
                    <img className="popular_content_photo" src={photo002} />
                    <div className="popular_content_title">
                      강아지랑 제주도 다녀왔어요~
                    </div>
                  </div>
                  <div className="content_wrap">
                    <img className="popular_content_photo" src={photo002} />
                    <div className="popular_content_title">
                      강아지랑 제주도 다녀왔어요~
                    </div>
                  </div>
                  <div className="content_wrap">
                    <img className="popular_content_photo" src={photo002} />
                    <div className="popular_content_title">
                      강아지랑 제주도 다녀왔어요~
                    </div>
                  </div>
                  <div className="content_wrap">
                    <img className="popular_content_photo" src={photo002} />
                    <div className="popular_content_title">
                      강아지랑 제주도 다녀왔어요~
                    </div>
                  </div>
                  <p className="view_more">더보기 >></p>
                </div>
              </div>
              {/* 코스 공유 인기글 끝*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
