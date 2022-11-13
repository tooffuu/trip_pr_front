import axios from "axios";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";
import "../../style/sign/Login.scss";
import { BACKEND_URL } from "../../utils/env";
import Topbar2 from "../main/Topbar2";

const Login = () => {
  const [memberId, setMemberId] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useRecoilState(userState);

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const data = await axios({
        url: `${BACKEND_URL}/member/login`,
        method: "POST",
        data: {
          memberId,
          password,
        },
      });
      setMemberId("");
      setPassword("");
      setUser(data.data);
      alert(data.data.nickname + "님 환영합니다! 🚀");
      window.location.href = "/";
    } catch (e) {
      console.log(e);
      alert("로그인 실패! 아이디 또는 비밀번호를 확인하세요.");
      setPassword("");
    }
  };

  return (
    <>
      <Topbar2 />
      <div className="login_body">
        <div className="login_container">
          <div className="login_container_wrap">
            <div className="login_container_title">로그인</div>
            <div className="login_container_content">
              <form onSubmit={loginUser}>
                <div className="login_id">
                  <p>아이디</p>
                  <input
                    type="text"
                    value={memberId}
                    onChange={(e) => {
                      setMemberId(e.target.value);
                    }}
                  />
                </div>
                <div className="login_password">
                  <p>비밀번호</p>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <button className="loginBtn">로그인</button>
              </form>
            </div>
            <div className="findData">
              <div className="findId">
                <a href="#" title="아이디 찾기">
                  아이디를 잊어버리셨나요?
                </a>
              </div>
              <div className="findPw">
                <a href="#" title="비밀번호 찾기">
                  비밀번호를 잊어버리셨나요?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
