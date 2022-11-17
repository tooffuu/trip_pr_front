import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";
import { BACKEND_URL } from "../../utils/env";
import Topbar2 from "../main/Topbar2";
import LeftBar from "./LeftBar";
import Profile from "./Profile";

const CheckPw = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");
  const [user, setUser] = useRecoilState(userState);

  // 아이디 값 = user의 id
  function setting() {
    setId(user.id);
  }

  useEffect(() => {
    setting();
  }, []);
  // <-- useEffect 사용하여 기본값 설정 끝 -- >

  const checkPassword = async (e) => {
    e.preventDefault();
    try {
      const data = await axios({
        url: `${BACKEND_URL}/member/confirmPw/${id}`,
        method: "POST",
        data: {
          password,
        },
      });
      setUserData(data.data);
    } catch (e) {
      console.log(e);
      alert("비밀번호가 다릅니다.");
    }
  };

  return (
    <>
      <Topbar2 />
      {!userData ? (
        <div className="login_body profile_body">
          <div className="login_container">
            <LeftBar />
            <div className="login_container_wrap profile_container_wrap">
              <div className="login_container_title mypage_title">
                프로필 변경
              </div>
              <hr className="profileHr" />
              <div className="login_container_content signup_container_content">
                <form onSubmit={checkPassword}>
                  <div>
                    <p>비밀번호</p>
                    <input
                      type="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder="비밀번호를 입력하세요"
                    />
                  </div>
                  <button className="signBtn">비밀번호 확인</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Profile />
      )}
    </>
  );
};

export default CheckPw;
