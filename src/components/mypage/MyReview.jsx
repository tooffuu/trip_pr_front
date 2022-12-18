import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";
import { BACKEND_URL } from "../../utils/env";
import Topbar2 from "../main/Topbar2";
import LeftBar from "./LeftBar";
import MyReviewList from "./MyReviewList";
import "../../style/mypage/MyReview.scss";

const MyReview = () => {
  const [user, setUser] = useRecoilState(userState);
  const [posts, setPosts] = useState([]);

  const showPostByUser = async (e) => {
    const data = await axios({
      url: `${BACKEND_URL}/member/post/${user.id}`,
      method: "GET",
    })
      .then((response) => {
        setPosts(response.data.boardDto);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    user && showPostByUser();
  }, []);

  const reverseGetPostByUser = posts?.map((post) => post).reverse();

  return (
    <>
      <Topbar2 />
      <div className="login_body profile_body">
        <div className="login_container">
          <LeftBar />
          <div className="review_wrap">
            {/* <div className="review_list"> */}
            {reverseGetPostByUser.map((post, index) => (
              <MyReviewList key={index} post={post} />
            ))}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyReview;
