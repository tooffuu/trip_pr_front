import React from "react";
import "../../style/mypage/MyReview.scss";

const MyReviewList = ({ post }) => {
  const ThumbImage = post.boardImageList[0].imgUrl;
  const date = post.modifiedDate.split("T");
  const modiDate = date[0].concat(" " + date[1]);

  return (
    <div className="review_list">
      <div className="myReview">
        <div className="myReview_title">
          <span
            onClick={() => {
              window.location.href = `/photo/${post.postId}`;
            }}
          >
            {post.title}
          </span>
        </div>
        <div className="myReview_date">{modiDate}</div>
        <div className="myReview_view">{post.view_count}</div>
      </div>
    </div>
  );
};

export default MyReviewList;
