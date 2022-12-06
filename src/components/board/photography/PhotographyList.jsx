import React, { useState } from "react";
import PhotographyListItem from "./PhotographyListItem";

const PhotographyList = ({ photoPosts }) => {
  const reverseGetPost = photoPosts.map((photoPost) => photoPost).reverse();

  return (
    <>
      <div>
        {reverseGetPost.map((photoPost, index) => (
          <PhotographyListItem key={index} photoPost={photoPost} />
        ))}
      </div>
    </>
  );
};

export default PhotographyList;
