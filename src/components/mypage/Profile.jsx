import React from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";
import "../../style/mypage/Profile.scss";
import Topbar2 from "../main/Topbar2";
import LeftBar from "./LeftBar";

const Profile = () => {
  const [user, setUser] = useRecoilState(userState);

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
              <form action="">
                <div>
                  <p>이름</p>
                  <input
                    type="text"
                    spellCheck={false}
                    value={user.memberName}
                  />
                </div>
                <div>
                  <p>아이디</p>
                  <input
                    className="input_Id"
                    type="text"
                    value={user.memberId}
                    readOnly
                  />
                </div>
                <div>
                  <p>닉네임</p>
                  <input type="text" spellCheck={false} value={user.nickname} />
                </div>
                <div>
                  <p>패스워드</p>
                  <input
                    type="password"
                    placeholder="변경할 패스워드를 입력해주세요"
                  />
                </div>
                <button className="signBtn">프로필 수정</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
