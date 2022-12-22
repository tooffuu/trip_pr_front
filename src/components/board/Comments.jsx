import React from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";
import "../../style/board/Comments.scss";
import CommentsList from "./CommentsList";
import { BACKEND_URL } from "../../utils/env";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Comments = () => {
  const { postId } = useParams();
  const [user, setUser] = useRecoilState(userState);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const reverseComment = comments.map((comment) => comment).reverse();

  const writeComment = async (e) => {
    if (window.confirm("댓글을 작성하시겠습니까?")) {
      e.preventDefault();
      try {
        const data = await axios({
          url: `${BACKEND_URL}/comment?postId=${postId}&memberId=${user.id}`,
          method: "POST",
          data: { comment },
        });
        alert("등록되었습니다.");
        window.location.reload();
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    const getData = async (e) => {
      const data = await axios({
        url: `${BACKEND_URL}/comment/find?postId=${postId}`,
        method: "GET",
      });
      setComments(data.data);
    };
    getData();
  }, []);

  return (
    <>
      <div className="write_comment">
        <form onSubmit={writeComment}>
          <textarea
            onClick={() => {
              if (!user) {
                alert("로그인하시면 댓글을 작성할 수 있습니다.");
              }
            }}
            className="textarea_comment"
            placeholder="댓글을 작성해보세요."
            spellCheck={false}
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <button className="comment_write_btn">작성</button>
        </form>
      </div>
      {reverseComment.map((comment, index) => (
        <CommentsList comment={comment} key={index} />
      ))}
    </>
  );
};

export default Comments;
