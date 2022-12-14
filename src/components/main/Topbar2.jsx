import React from "react";
import { useRecoilState } from "recoil";
import { profileState, userState } from "../../recoil";
import "../../style/main/Topbar2.scss";
import { FiBell } from "react-icons/fi";

const Topbar2 = () => {
  const [user, setUser] = useRecoilState(userState);
  const [profileImg, setProfileImg] = useRecoilState(profileState);

  return (
    <div className="bar_body bar_body2">
      <div className="bar_contain">
        <div className="bar_body_wrap bar_body_wrap2">
          <div className="top_logo top_logo2">
            <a href="/">딩댕동</a>
          </div>
          <div className="search_topbar">
            <p className="searchlist" title="검색기록">
              👀
            </p>
            <input
              className="search_topbar_input"
              type="text"
              placeholder="장소 검색"
            />
          </div>
          {/* 탑바 유저 상태에 따라 변경 */}
          {user ? (
            <div className="sign_topbar sign_topbar_user">
              <div
                onClick={() => {
                  if (window.confirm("로그아웃하시겠습니까?")) {
                    alert("로그아웃 되었습니다.");
                    setUser(null);
                    window.location.href = "/";
                  }
                }}
                className="login_topbar logout_topbar"
              >
                로그아웃
              </div>
              <div className="userProfile">
                <p
                  onClick={() => {
                    window.location.href = "/checkpw";
                  }}
                  className="userNick"
                >
                  {user.nickname}
                </p>
                <img
                  onClick={() => {
                    window.location.href = "/myprofile";
                  }}
                  className="userImg"
                  src={profileImg}
                />
                <div className="nonfication_icon">
                  <FiBell />
                </div>
              </div>
            </div>
          ) : (
            <div className="sign_topbar">
              <div className="login_topbar">
                <a href="/login">로그인</a>
              </div>
              <div className="signUp_topbar">
                <a href="/signup">회원가입</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar2;
