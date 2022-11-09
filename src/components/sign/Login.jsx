import React from "react";
import "../../style/sign/Login.scss";
import Topbar2 from "../main/Topbar2";

const Login = () => {
  return (
    <>
      <Topbar2 />
      <div className="login_body">
        <div className="login_container">
          <div className="login_container_wrap">
            <div className="login_container_title">로그인</div>
            <div className="login_container_content">
              <div className="login_id">
                <p>아이디</p>
                <input type="text" />
              </div>
              <div className="login_password">
                <p>비밀번호</p>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
