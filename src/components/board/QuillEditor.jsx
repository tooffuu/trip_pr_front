import axios from "axios";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";
import { BACKEND_URL } from "../../utils/env";

const QuillEditor = () => {
  const [user, setUser] = useRecoilState(userState);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [region, setRegion] = useState("");
  const [imageIdList, setImageIdList] = useState([]);
  const quillRef = useRef();
  const formData = new FormData();

  // 글 수정 함수
  const { postId } = useParams();
  const [postDt, setPostDt] = useState("");
  const [editRegion, setEditRegion] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [boardCate, setBoardCate] = useState("사진자랑");

  // 이미지 핸들러
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.setAttribute("multiple", "");
    input.click();

    input.addEventListener("change", async (e) => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("files", file);
      try {
        const data = await axios.post(`${BACKEND_URL}/image`, formData);
        const IMG_URL = data.data.imgUrl;
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();

        editor.insertEmbed(range.index, "image", IMG_URL);

        //이미지 리스트 배열
        setImageIdList((prev) => prev.concat(data.data.id));
      } catch (e) {
        if (file.size > 1048576) {
          alert("이미지 사이즈가 너무 큽니다.");
        }
      }
    });
  };

  // react-quill & 커스텀 툴바 사용
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          [
            "bold",
            "italic",
            "underline",
            { align: [] },
            { color: [] },
            { background: [] },
            "image",
          ],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "align",
    "color",
    "background",
    "image",
  ];
  // react-quill & 커스텀 툴바 끝

  const handleText = (contents) => {
    setContent(contents);
  };

  const editHandleText = (editContent) => {
    setEditContent(editContent);
  };

  // select value 값 넘기기
  const onRegionChange = (e) => {
    setRegion(e.target.value);
  };

  const editOnRegionChange = (e) => {
    setEditRegion(e.target.value);
  };

  // 글 작성
  const getPost = async (e) => {
    e.preventDefault();
    if (window.confirm("등록하시겠습니까?")) {
      if (title === "") {
        alert("제목을 입력해주세요.");
        return;
      } else if (content === "") {
        alert("내용을 입력해주세요.");
        return;
      } else if (region === "") {
        alert("카테고리를 선택해주세요.");
        return;
      } else if (imageIdList == 0) {
        alert("사진을 한 장이상 선택해주세요.");
        return;
      }
      try {
        formData.append("boardCate", boardCate);
        formData.append("region", region);
        formData.append("title", title);
        formData.append("content", content);
        formData.append("imageIdList", imageIdList);
        const data = await axios({
          url: `${BACKEND_URL}/board/write?memberId=${user.id}`,
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        });
        setTitle("");
        setContent("");
        window.location.href = "/photo";
        alert("작성 완료");
      } catch (e) {
        console.log(e);
        alert("작성 실패");
      }
    }
  };

  // 글 수정

  // id에 맞는 글 가져오기
  const postEdit = async () => {
    const data = await axios({
      url: `${BACKEND_URL}/board/photo/${postId}`,
      method: "GET",
    });
    // setPostDt(data.data);
    setEditTitle(data.data.title);
    setEditContent(data.data.content);
    setEditRegion(data.data.region);
  };

  useEffect(() => {
    postId && postEdit();
  }, []);

  const updatePost = async (e) => {
    e.preventDefault();
    if (window.confirm("등록하시겠습니까?")) {
      if (editTitle === "") {
        alert("제목을 입력해주세요.");
        return;
      } else if (editContent === "") {
        alert("내용을 입력해주세요.");
        return;
      } else if (editRegion === "") {
        alert("카테고리를 선택해주세요.");
        return;
      }
      try {
        formData.append("region", editRegion);
        formData.append("title", editTitle);
        formData.append("content", editContent);
        formData.append("imageIdList", imageIdList);
        const data = await axios({
          url: `${BACKEND_URL}/board/edit/${postId}`,
          method: "PATCH",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        });
        window.location.href = "/photo";
        alert("수정 완료");
      } catch (e) {
        console.log(e);
        alert("작성 실패");
      }
    }
  };

  return (
    <>
      <form onSubmit={postId ? updatePost : getPost}>
        <div className="write_back">
          <select
            name="zone"
            className="zone_list_write"
            value={postId ? editRegion : region}
            onChange={postId ? editOnRegionChange : onRegionChange}
          >
            <option value="selectRegion">지역선택</option>
            <option value="서울">서울</option>
            <option value="경기">경기</option>
            <option value="강원">강원</option>
            <option value="충남·대전">충남·대전</option>
            <option value="충북">충북</option>
            <option value="전남·광주">전남·광주</option>
            <option value="전북">전북</option>
            <option value="경남">경남</option>
            <option value="경북·대구">경북·대구</option>
            <option value="제주">제주</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            className="board_title"
            placeholder="제목을 입력하세요"
            value={postId ? editTitle : title}
            onChange={(e) => {
              postId ? setEditTitle(e.target.value) : setTitle(e.target.value);
            }}
          />
        </div>
        <div className="text-editor">
          <ReactQuill
            placeholder="당신의 추억을 공유해주세요."
            ref={quillRef}
            modules={modules}
            formats={formats}
            value={postId ? editContent : content}
            onChange={postId ? editHandleText : handleText}
          />
        </div>
        {postId ? (
          <button className="editor_write_btn editor_write_done">
            수정 완료
          </button>
        ) : (
          <button className="editor_write_btn editor_write_done">
            작성 완료
          </button>
        )}
      </form>
      <button
        className="editor_write_btn editor_write_cancel"
        onClick={() => {
          if (
            title.length !== 0 ||
            content.length !== 0 ||
            editTitle?.length !== 0 ||
            editContent?.length !== 0
          ) {
            if (window.confirm("작성을 취소하시겠습니까?")) {
              window.location.href = "/photo";
            }
          } else {
            window.location.href = "/photo";
          }
        }}
      >
        작성 취소
      </button>
    </>
  );
};

export default QuillEditor;
