import React, { useEffect, useState } from "react";
import Topbar from "../main/Topbar";
import "../../style/board/WritePhoto.scss";
import QuillEditor from "./QuillEditor";

const WritePhoto = () => {
  return (
    <>
      <Topbar />
      <div className="main_body">
        <div className="main_container">
          <div className="main_home_contents write_contents">
            <div className="popular_contents ">
              <p className="popular_contents_p photoGraphy">
                <a href="/photo">μ¬μ§μλ π¦</a>
              </p>
            </div>
            {/* κΈμ°κΈ° μλν° μμ */}
            <div className="board_background board_background2">
              <QuillEditor />
            </div>
            {/* κΈμ°κΈ° μλν° λ */}
          </div>
        </div>
      </div>
    </>
  );
};

export default WritePhoto;
