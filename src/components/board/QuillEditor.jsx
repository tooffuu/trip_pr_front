import axios from "axios";
import React, { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
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
        console.log(e);
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

  const handleText = (contents) => {
    setContent(contents);
  };
  // react-quill & 커스텀 툴바 끝

  // select value 값 넘기기
  const onRegionChange = (e) => {
    setRegion(e.target.value);
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
      }
      try {
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
          <ReactQuill
            placeholder="당신의 추억을 공유해주세요."
            ref={quillRef}
            modules={modules}
            formats={formats}
            content={content}
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
          if (title.length !== 0 || content.length !== 0) {
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
