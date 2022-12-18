import React from "react";
import "../../style/mypage/MyReview.scss";

const MyReviewList = ({ post }) => {
  const ThumbImage = post.boardImageList[0].imgUrl;

  return (
    <div className="review_list">
      <div className="myReview">
        <img className="myReview_img" src={ThumbImage} alt="" />
        <div
          className="myReview_title"
          onClick={() => {
            window.location.href = `/photo/${post.postId}`;
          }}
        >
          {post.title}
        </div>
      </div>
    </div>
  );
};

export default MyReviewList;
