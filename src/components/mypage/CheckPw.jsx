import React from "react";
import Topbar2 from "../main/Topbar2";
import LeftBar from "./LeftBar";

const CheckPw = () => {
  return (
    <>
      <Topbar2 />
      <div className="login_body profile_body">
        <div className="login_container">
          <LeftBar />
          <div className="login_container_wrap profile_container_wrap">
            <div className="login_container_title mypage_title"></div>
            <div className="login_container_content signup_container_content">
              <form action="">
                <div>
                  <p>비밀번호</p>
                  <input type="password" placeholder="비밀번호를 입력하세요" />
                </div>
                <button className="signBtn">비밀번호 확인</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckPw;
