import axios from "axios";
import React, { useMemo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";
import { BACKEND_URL } from "../../utils/env";
import CustomToolbar from "./CustomToolbar";

const QuillEditor = () => {
  const [user, setUser] = useRecoilState(userState);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [region, setRegion] = useState("");
  const [writer, setWriter] = useState(user && user.nickname);

  // react-quill & 커스텀 툴바 사용
  const modules = useMemo(
    () => ({
      toolbar: {
        container: "#toolbar",
        handlers: {
          // 위에서 만든 이미지 핸들러 사용하도록 설정
          //   image: imageHandler,
        },
      },
    })
    // [imageHandler]
  );

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

  const handleText = (value) => {
    // console.log(value);
    setContent(value);
  };
  // react-quill & 커스텀 툴바 끝

  // select value 값 넘기기
  const onRegionChange = (e) => {
    setRegion(e.target.value);
  };
  //   console.log(region);

  // 글 작성
  const getPost = async (e) => {
    e.preventDefault();
    if (window.confirm("등록하시겠습니까?")) {
      if (title == "") {
        alert("제목을 입력해주세요.");
        return;
      } else if (content == "") {
        alert("내용을 입력해주세요.");
        return;
      } else if (region == "") {
        alert("카테고리를 선택해주세요.");
        return;
      }
      try {
        axios({
          url: `${BACKEND_URL}/board/write`,
          method: "POST",
          data: {
            region,
            title,
            content,
            writer,
          },
        });
        setTitle("");
        setContent("");
        alert("등록되었습니다.");
        window.location.href = "/photo";
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <>
      <form onSubmit={getPost}>
        <div className="write_back">
          <select
            name="zone"
            className="zone_list_write"
            value={region}
            onChange={onRegionChange}
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
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="text-editor">
          <CustomToolbar />
          <ReactQuill
            modules={modules}
            formats={formats}
            value={content}
            onChange={handleText}
          />
        </div>
        <button className="editor_write_btn editor_write_done">
          작성 완료
        </button>
      </form>
      <button
        className="editor_write_btn editor_write_cancel"
        onClick={() => {
          if (title.length != 0 || content.length != 0) {
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
