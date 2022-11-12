import React from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";
import "../../style/mypage/LeftBar.scss";
import profile from "../../image/profile.png";

const LeftBar = () => {
  const [user, setUser] = useRecoilState(userState);

  return (
    <>
      <div className="leftbar_body">
        <div className="leftbar_container">
          <div className="leftbar_container_wrap">
            <div className="leftbar_profile">
              <img className="left_mypic" src={profile} alt="" />
              {user ? (
                <p className="left_mynick">{user.nickname}</p>
              ) : (
                <p
                  className="left_mynick left_mynick_notuser"
                  onClick={() => {
                    window.location.href = "/login";
                  }}
                >
                  로그인을 해주세요
                </p>
              )}
              <p className="left_account_e">Your personal Account</p>
            </div>
            <div className="left_menuList">
              <div className="menu_wrap">
                <div className="menu_setting01">
                  🌞Setting
                  <a href="/checkpw">
                    <p>🦸‍♀️ 프로필 변경</p>
                  </a>
                  <a href="/myprofile">
                    <p>🦸‍♀️ 내 리뷰 보기</p>
                  </a>
                  <a href="/checkpw">
                    <p>🦸‍♀️ 프로필 변경</p>
                  </a>
                  <a href="/checkpw">
                    <p>🦸‍♀️ 프로필 변경</p>
                  </a>
                  <a href="/checkpw">
                    <p>🦸‍♀️ 프로필 변경</p>
                  </a>
                </div>
                <div className="menu_setting01">
                  🌴Setting
                  <a href="/checkpw">
                    <p>프로필 변경</p>
                  </a>
                  <a href="/checkpw">
                    <p>프로필 변경</p>
                  </a>
                  <a href="/checkpw">
                    <p>프로필 변경</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
