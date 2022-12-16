import React, { useEffect, useState } from "react";
import { profileState, userState } from "../../recoil";
import { useRecoilState } from "recoil";
import "../../style/main/Topbar.scss";
import { FiBell } from "react-icons/fi";
import { BACKEND_URL } from "../../utils/env";
import axios from "axios";

const Topbar = () => {
  const [user, setUser] = useRecoilState(userState);
  const [profileImg, setProfileImg] = useRecoilState(profileState);
  const [memberId, setMemberId] = useState(user && user.memberId);
  const [id, setId] = useState(user && user.id);

  // recoilState 사용하여 profileImg안에 user의 profileImg 경로 담음
  const imagePath = process.env.PUBLIC_URL + "/assets/";

  const showProfileImage = async (e) => {
    const data = await axios({
      url: `${BACKEND_URL}/member/${id}`,
      method: "GET",
    })
      .then((response) => {
        setProfileImg(imagePath + response.data.profile_img_name);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    user && showProfileImage();
  }, []);

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await axios({
  //       url: `${BACKEND_URL}/member/${id}`,
  //       method: "GET",
  //     });
  //     setProfileImg(imagePath + data.data.profile_img_name);
  //   };
  //   getData();
  // });

  return (
    <div className="bar_body">
      <div className="bar_contain">
        <div className="bar_body_wrap">
          <div className="top_logo">
            <a href="/">딩댕동</a>
          </div>
          <div className="search_topbar">
            {/* 추후에 클릭하면 검색기록 나오게 할 예정 */}
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

export default Topbar;
