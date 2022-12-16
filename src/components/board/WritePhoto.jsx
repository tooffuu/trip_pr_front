import React, { useEffect, useState } from "react";
import Topbar from "../main/Topbar";
import "../../style/board/WritePhoto.scss";
import QuillEditor from "./QuillEditor";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../utils/env";

const WritePhoto = () => {
  return (
    <>
      <Topbar />
      <div className="main_body">
        <div className="main_container">
          <div className="main_home_contents write_contents">
            <div className="popular_contents ">
              <p className="popular_contents_p photoGraphy">
                <a href="/photo">사진자랑 🦝</a>
              </p>
            </div>
            {/* 글쓰기 에디터 시작 */}
            <div className="board_background board_background2">
              <QuillEditor />
            </div>
            {/* 글쓰기 에디터 끝 */}
          </div>
        </div>
      </div>
    </>
  );
};

export default WritePhoto;
