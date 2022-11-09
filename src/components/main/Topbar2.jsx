import React from "react";
import "../../style/main/Topbar2.scss";
// import { FiBell } from "react-icons/fi";

const Topbar = () => {
  return (
    <div className="bar_body bar_body2">
      <div className="bar_contain">
        <div className="bar_body_wrap bar_body_wrap2">
          <div className="top_logo top_logo2">
            <a href="/">딩댕동</a>
          </div>
          <div className="search_topbar">
            <p>👀</p>
            <input
              className="search_topbar_input"
              type="text"
              placeholder="장소 검색"
            />
          </div>
          <div className="sign_topbar">
            <div className="login_topbar">
              <a href="/login">로그인</a>
            </div>
            <div className="signUp_topbar">
              <a href="/signup">회원가입</a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bar_body_left">
        <div className="bar_contain_left">
          <div className="bar_body_wrap_left">
            <div className="leftMenu">
              <div>· 메뉴 1</div>
              <div>· 메뉴 2</div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
    // 알림 아이콘
    // <FiBell />
  );
};

export default Topbar;
