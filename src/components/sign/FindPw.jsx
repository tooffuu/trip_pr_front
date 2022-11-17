import axios from "axios";
import React, { useState } from "react";
import "../../style/sign/FindPw.scss";
import { BACKEND_URL } from "../../utils/env";
import Topbar2 from "../main/Topbar2";

const FindPw = () => {
  const [id, setId] = useState("");
  const [memberId, setMemberId] = useState("");
  const [email, setEmail] = useState("");
  const [userPw, setUserPw] = useState("");
  const [password, setPassword] = useState("");

  const findUserData = async (e) => {
    e.preventDefault();
    try {
      const data = await axios({
        url: `${BACKEND_URL}/member/updatePw`,
        method: "GET",
        params: {
          memberId,
          email,
        },
      });
      setMemberId("");
      setEmail("");
      setId(data.data.id);
      setUserPw(data.data.password);
    } catch (e) {
      alert("등록된 정보가 없습니다.");
    }
  };

  // 비밀번호 변경
  const updatePassword = async (e) => {
    e.preventDefault();
    if (password == "") {
      alert("공백있음");
    } else {
      try {
        const data = await axios({
          url: `${BACKEND_URL}/member/updatePw/${id}`,
          method: "PATCH",
          data: {
            password,
          },
        });
        setPassword(data.data);
        alert("🔔 비밀번호가 변경되었습니다.");
        window.location.href = "/";
      } catch (e) {
        console.log(e);
        alert("🔔 비밀번호 변경 실패 ! 다시 시도해주세요.");
      }
    }
  };

  return (
    <>
      <Topbar2 />
      <div className="login_body">
        <div className="login_container">
          <div className="login_container_wrap">
            <div className="login_container_title">비밀번호찾기</div>
            <div className="login_container_content findpw_content">
              {/* 패스워드 존재 여부에 따른 삼항연산자 적용 */}
              {userPw ? (
                <form onSubmit={updatePassword}>
                  <div className="login_id new_pw">
                    <p>새로운 비밀번호</p>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <button className="loginBtn updatePwBtn">
                    비밀번호 변경
                  </button>
                </form>
              ) : (
                <form onSubmit={findUserData}>
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
                    <p>이메일</p>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <button className="loginBtn findpwBtn">비밀번호 변경</button>
                </form>
              )}
              {/* 삼항연산자 끝 */}
            </div>
            <div className="findData">
              <div className="findPw">
                <a href="findid">아이디를 잊어버리셨나요?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindPw;
