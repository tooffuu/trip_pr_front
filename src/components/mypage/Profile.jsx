import axios from "axios";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";
import "../../style/mypage/Profile.scss";
import { BACKEND_URL } from "../../utils/env";
import Topbar2 from "../main/Topbar2";
import LeftBar from "./LeftBar";
import UpdateProfileImage from "./UpdateProfileImage";

const Profile = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useRecoilState(userState);
  const [nickname, setNickname] = useState(user && user.nickname);

  // 비밀번호 변경 -> 후에 이름 / 닉네임 / 비밀번호 동시 변경 코드로 수정
  const updatePassword = async (e) => {
    e.preventDefault();
    if (password === "") {
      alert("🔔 패스워드를 입력해주세요.");
    } else {
      try {
        const data = await axios({
          url: `${BACKEND_URL}/member/updateProfile/${user.id}`,
          method: "PATCH",
          data: {
            nickname,
            password,
          },
        });
        setUser(data.data);
        alert("🔔 정보가 수정되었습니다.");
        window.location.href = "/";
      } catch (e) {
        console.log(e);
        alert("🔔 비밀번호 변경 실패 ! 다시 시도해주세요.");
      }
    }
  };

  // 회원 탈퇴
  const deleteUser = async (e) => {
    if (window.confirm("정말 탈퇴하시겠습니까? 😱")) {
      e.preventDefault();
      try {
        const data = await axios({
          url: `${BACKEND_URL}/member/delete/${user.id}`,
          method: "DELETE",
          data: {
            id,
          },
        });
        alert("탈퇴 완료 👋");
        setUser(null);
        window.location.href = "/";
      } catch (e) {
        alert("탈퇴 실패 ! 다시 시도해주세요");
      }
    }
  };

  return (
    <>
      <Topbar2 />
      <div className="login_body profile_body">
        <div className="login_container">
          <LeftBar />
          <div className="login_container_wrap profile_container_wrap">
            <div className="login_container_title mypage_title">
              프로필 변경
            </div>
            <hr className="profileHr" />
            <div className="login_container_content signup_container_content">
              <UpdateProfileImage />
              <form onSubmit={updatePassword}>
                <div>
                  <p>이름</p>
                  <input
                    className="input_Id"
                    type="text"
                    value={user && `${user.memberName}`}
                    readOnly
                  />
                </div>
                <div>
                  <p>아이디</p>
                  <input
                    className="input_Id"
                    type="text"
                    value={user && `${user.memberId}`}
                    readOnly
                  />
                </div>
                <div>
                  <p>닉네임</p>
                  <input
                    type="text"
                    spellCheck={false}
                    value={user && nickname}
                    onChange={(e) => {
                      setNickname(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <p>패스워드</p>
                  <input
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="변경할 패스워드를 입력해주세요"
                  />
                </div>
                <button className="signBtn">프로필 수정</button>
              </form>
              <div className="deleteUser" onClick={deleteUser}>
                탈퇴하기
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
