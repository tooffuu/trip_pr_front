import React from "react";
import PhotographyListItem from "./PhotographyListItem";

const PhotographyList = ({ photoPosts, region, photoPostByRegion }) => {
  const reverseGetPost = photoPosts?.map((photoPost) => photoPost).reverse();
  const reverseGetPostByRegion = photoPostByRegion
    ?.map((postByRegion) => postByRegion)
    .reverse();

  return (
    <>
      {region === "all" || region === "" ? (
        <div>
          {reverseGetPost.map((photoPost, index) => (
            <PhotographyListItem
              key={index}
              photoPost={photoPost}
              region={region}
            />
          ))}
        </div>
      ) : (
        <div>
          {reverseGetPostByRegion.map((photoPostByRegion, index) => (
            <PhotographyListItem
              key={index}
              photoPostByRegion={photoPostByRegion}
            />
          ))}
        </div>
      )}
      {region === "all" ||
        region === "" ||
        (photoPostByRegion.length === 0 && <div>게시글이 없습니다. 😥</div>)}
    </>
  );
};

export default PhotographyList;
