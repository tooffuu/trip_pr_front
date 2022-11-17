import React, { useState } from "react";
import Topbar2 from "../main/Topbar2";
import "../../style/sign/FindId.scss";
import { BACKEND_URL } from "../../utils/env";
import axios from "axios";

const FindId = () => {
  const [memberName, setmemberName] = useState("");
  const [memberId, setMemberId] = useState("");
  const [email, setEmail] = useState("");

  const findUserId = async (e) => {
    e.preventDefault();
    try {
      const data = await axios({
        url: `${BACKEND_URL}/member/findId`,
        method: "GET",
        params: {
          memberName,
          email,
        },
      });
      setMemberId(data.data);
    } catch (e) {
      alert("등록된 유저 정보가 없습니다.");
    }
  };

  return (
    <>
      <Topbar2 />
      <div className="login_body">
        <div className="login_container">
          <div className="login_container_wrap">
            <div className="login_container_title">아이디찾기</div>
            <div className="login_container_content find_content">
              {!memberId ? (
                <form onSubmit={findUserId}>
                  <div className="login_id">
                    <p>이름</p>
                    <input
                      type="text"
                      value={memberName}
                      onChange={(e) => {
                        setmemberName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="login_password findEmail">
                    <p>이메일</p>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <button className="loginBtn findBtn">아이디 찾기</button>
                </form>
              ) : (
                <div className="findUserId">
                  <div>
                    고객님의 아이디는 <p>{memberId}</p> 입니다.
                  </div>
                </div>
              )}
            </div>
            <div className="findData">
              <div className="findPw">
                <a href="findpw" title="비밀번호 찾기">
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

export default FindId;
