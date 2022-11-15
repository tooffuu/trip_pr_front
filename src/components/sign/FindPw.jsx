import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";
import Topbar2 from "../main/Topbar2";

const FindPw = () => {
  const [memberName, setMemberName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useRecoilState(userState);
  return (
    <>
      <Topbar2 />
      <div className="login_body">
        <div className="login_container">
          <div className="login_container_wrap">
            <div className="login_container_title">비밀번호찾기</div>
            <div className="login_container_content find_content">
              <form onSubmit>
                <div className="login_id">
                  <p>이름</p>
                  <input
                    type="text"
                    value={memberName}
                    onChange={(e) => {
                      setMemberName(e.target.value);
                    }}
                  />
                </div>
                <div className="login_password findEmail">
                  <p>이메일</p>
                  <input
                    type="password"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <button className="loginBtn findBtn">비밀번호 변경</button>
              </form>
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
