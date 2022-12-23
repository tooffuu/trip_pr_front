import React from "react";
import "../../style/mypage/MyReview.scss";

const MyReviewList = ({ post }) => {
  const ThumbImage = post.boardImageList[0].imgUrl;
  const date = post.modifiedDate.split("T");
  const modiDate = date[0].concat(" " + date[1]);
  const reply = post.comment?.length;

  return (
    <div className="review_list">
      <p className="checkbox">□</p>
      <div className="myReview">
        <div className="myReview_title">
          <p className="board_cate">{post.boardCate}</p>
          <span
            className="review_title"
            onClick={() => {
              window.location.href = `/photo/${post.postId}`;
            }}
          >
            {post.title}
          </span>
          <div className="heart_bottom">
            <span>🤍 0</span>
            <span>💌 {reply}</span>
            <span>👀 {post.view_count}</span>
          </div>
        </div>
        <div className="myReview_date">{modiDate}</div>
      </div>
    </div>
  );
};

export default MyReviewList;
