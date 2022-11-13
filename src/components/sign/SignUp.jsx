import React, { useState } from "react";
import Topbar2 from "../main/Topbar2";
import "../../style/sign/SignUp.scss";
import { BACKEND_URL } from "../../utils/env";
import axios from "axios";
import kakao from "../../image/kakao.png";
import naver from "../../image/naver.png";
import google from "../../image/google.png";

const SignUp = () => {
  const [memberId, setMemberId] = useState("");
  const [memberName, setMemberName] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const joinUser = async (e) => {
    e.preventDefault();
    if (window.confirm("가입하시겠습니까?")) {
      if (
        memberId === "" ||
        memberName === "" ||
        nickname === "" ||
        password === ""
      ) {
        alert("정보를 모두 입력해주세요.");
      } else {
        try {
          const data = await axios({
            url: `${BACKEND_URL}/member/join`,
            method: "POST",
            data: {
              memberId,
              memberName,
              nickname,
              password,
            },
          });
          setMemberId("");
          setMemberName("");
          setNickname("");
          setPassword("");
          alert("회원가입이 완료되었습니다.");
          window.location.href = "/";
        } catch (e) {
          alert("회원가입이 실패하였습니다. 데이터를 확인해주세요.");
        }
      }
    }
  };

  return (
    <>
      <Topbar2 />
      <div className="login_body">
        <div className="login_container">
          <div className="login_container_wrap">
            <div className="login_container_title">회원가입</div>
            <div className="login_container_content signup_container_content">
              <form onSubmit={joinUser}>
                <div>
                  <p>이름</p>
                  <input
                    type="text"
                    placeholder="이름을 입력해주세요."
                    value={memberName}
                    onChange={(e) => {
                      setMemberName(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <p>아이디</p>
                  <input
                    type="text"
                    placeholder="아이디를 입력해주세요."
                    value={memberId}
                    onChange={(e) => {
                      setMemberId(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <p>닉네임</p>
                  <input
                    type="text"
                    placeholder="닉네임을 입력해주세요."
                    value={nickname}
                    onChange={(e) => {
                      setNickname(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <p>패스워드</p>
                  <input
                    type="password"
                    placeholder="패스워드를 입력해주세요."
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <button type="submit" className="signBtn">
                  가입하기
                </button>
              </form>
            </div>
            <div className="fast_signUp">
              <p>👉 1초만에 가입하기</p>
              <div className="kakaoSign">
                <img src={kakao} alt="" />
              </div>
              <div className="naverSign">
                <img src={naver} alt="" />
              </div>
              <div className="googleSign">
                <img src={google} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
