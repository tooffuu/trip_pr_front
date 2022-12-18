import React from "react";
import { useRecoilState } from "recoil";
import { profileState, userState } from "../../recoil";
import "../../style/mypage/LeftBar.scss";

const LeftBar = () => {
  const [user, setUser] = useRecoilState(userState);
  const [profileImg, setProfileImg] = useRecoilState(profileState);

  return (
    <>
      <div className="leftbar_body">
        <div className="leftbar_container">
          <div className="leftbar_container_wrap">
            <div className="leftbar_profile">
              <img className="left_mypic" src={profileImg} alt="" />
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
                    <p>🦸‍♀️ 프로필 변경하기</p>
                  </a>
                  <a href="/myprofile">
                    <p>🦸‍♀️ Nonfications</p>
                  </a>
                  <a href="/myReview">
                    <p>🦸‍♀️ 나의 리뷰</p>
                  </a>
                  <a href="/checkpw">
                    <p>🦸‍♀️ 나의 코스</p>
                  </a>
                  <a href="/checkpw">
                    <p>🦸‍♀️ 사진 보기</p>
                  </a>
                </div>
                <div className="menu_setting01">
                  🌴Setting
                  <a href="/checkpw">
                    <p>🎅 고객센터</p>
                  </a>
                  <a href="/checkpw">
                    <p>🎅 프로필 변경</p>
                  </a>
                  <a href="/checkpw">
                    <p>🎅 프로필 변경</p>
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
