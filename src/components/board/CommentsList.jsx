import React from "react";

const CommentsList = ({ comment }) => {
  const user = comment.member?.nickname;
  const context = comment.comment;

  return (
    <div className="comments_list_wrap">
      <div className="comment_list">
        <div className="comment_user">{user}</div>
        <div className="comment_content">&nbsp;{context}</div>
      </div>
    </div>
  );
};

export default CommentsList;
