import React from "react";
import Topbar2 from "../main/Topbar2";
import "../../style/sign/SignUp.scss";

const SignUp = () => {
  return (
    <>
      <Topbar2 />
      <div className="login_body">
        <div className="login_container">
          <div className="login_container_wrap">
            <div className="login_container_title">회원가입</div>
            <div className="login_container_content signup_container_content">
              <div>
                <p>이름</p>
                <input type="text" />
              </div>
              <div>
                <p>아이디</p>
                <input type="text" />
              </div>
              <div>
                <p>닉네임</p>
                <input type="text" />
              </div>
              <div>
                <p>패스워드</p>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
