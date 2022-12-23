import axios from "axios";
import React from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";
import { BACKEND_URL } from "../../utils/env";

const CommentsList = ({ comment }) => {
  const [user, setUser] = useRecoilState(userState);
  const userName = comment.member?.nickname;
  const context = comment.comment;
  const id = comment.id;

  const deleteComment = (e) => {
    if (window.confirm("삭제하시겠습니까?")) {
      try {
        const data = axios({
          url: `${BACKEND_URL}/comment/${id}`,
          method: "DELETE",
        });
        alert("삭제되었습니다.");
        window.location.reload();
      } catch (e) {
        console.log(e);
        alert("error");
      }
    }
  };

  return (
    <>
      <div className="comments_list_wrap">
        <div className="comment_list">
          <div className="comment_user">{userName}</div>
          <div className="comment_content">&nbsp;{context}</div>
        </div>
        {user?.id === comment.member?.id && (
          <div className="comment_edit_button">
            <button className="post_edit_btn" onClick={() => {}}>
              수정
            </button>
            <button onClick={deleteComment}>삭제</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CommentsList;
