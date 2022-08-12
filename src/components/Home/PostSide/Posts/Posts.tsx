import React from "react";
import { PostsData } from "../../../../Data/PostsData";
import Post from "./Post";

const Posts = () => {
  return (
    <div style={{ height: "80vh", overflow: "scroll" }}>
      {PostsData.map((_post, _id) => {
        return <Post key={_id} data={_post} />;
      })}
    </div>
  );
};

export default Posts;
