import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Post from "./Post";

import { getTimelinePosts } from "../../../actions/PostsAction";
import { AppDispatch, RootState } from "../../../store/ReduxStore";
import { Alert, AlertTitle } from "@mui/material";

const Posts: any = () => {
  const params = useParams();
  const dispatch: AppDispatch = useDispatch();
  const user: any = useSelector((state: RootState) => state.auth.authData);
  let { posts, loading } = useSelector((state: RootState | any) => state.post);

  interface PostData {
    _id: number | string;
    userId?: number | string;
    image?: string;
    profile?: string;
    name?: string;
    date?: string;
    desc?: string;
    likes?: string;
    liked?: boolean;
  }

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, [dispatch, user._id]);

  if (params.id)
    posts =
      posts && posts.filter((post: PostData) => post.userId === params.id);

  return (
    <>
      <div style={{ height: "80vh", overflow: "scroll" }}>
        {!posts ? (
          <Alert variant="outlined" severity="info">
            <AlertTitle>Info</AlertTitle>
            No Posts Yet !
          </Alert>
        ) : (
          loading &&
          posts.map((post: PostData, id: number) => {
            return <Post data={post} key={id} />;
          })
        )}
      </div>
    </>
  );
};

export default Posts;
