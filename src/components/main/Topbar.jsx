import React from "react";
import "../../style/main/Topbar.scss";

const Topbar = () => {
  return (
    <div className="bar_body">
      <div className="bar_contain">
        <div className="bar_body_wrap">
          <div className="top_logo">
            <a href="#">딩댕동</a>
          </div>
          <div className="top_menu">
            <div className="menu1">메뉴 1</div>
            <div className="menu2">메뉴 2</div>
          </div>
          <div className="sign_topbar">
            <div className="login_topbar">로그인</div>
            <div className="signUp_topbar">회원가입</div>
          </div>
        </div>
      </div>
      <div className="bar_body_left">
        <div className="bar_contain_left">
          <div className="bar_body_wrap_left">
            <div className="leftMenu">
              {/* <ul className="left_menu_ul">
                메뉴 1
                <li>
                  <a href="#">하위 메뉴</a>
                </li>
                <li>
                  <a href="#">하위 메뉴</a>
                </li>
                <li>
                  <a href="#">하위 메뉴</a>
                </li>
                <li>
                  <a href="#">하위 메뉴</a>
                </li>
                <li>
                  <a href="#">하위 메뉴</a>
                </li>
              </ul> */}
              <ul>
                <li className="left_menu_ul">
                  메뉴 1
                  <ul>
                    <li>
                      <a href="">하위 메뉴</a>
                    </li>
                    <li>
                      <a href="">하위 메뉴</a>
                    </li>
                    <li>
                      <a href="">하위 메뉴</a>
                    </li>
                    <li>
                      <a href="">하위 메뉴</a>
                    </li>
                    <li>
                      <a href="">하위 메뉴</a>
                    </li>
                  </ul>
                </li>
                <li className="left_menu_ul">
                  메뉴 2
                  <ul>
                    <li>
                      <a href="">하위 메뉴</a>
                    </li>
                    <li>
                      <a href="">하위 메뉴</a>
                    </li>
                    <li>
                      <a href="">하위 메뉴</a>
                    </li>
                    <li>
                      <a href="">하위 메뉴</a>
                    </li>
                    <li>
                      <a href="">하위 메뉴</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
