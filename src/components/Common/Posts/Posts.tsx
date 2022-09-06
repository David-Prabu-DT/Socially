import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Post from "./Post";
import { getTimelinePosts } from "../../../actions/PostsAction";
import { AppDispatch, RootState } from "../../../store/ReduxStore";
import { Alert, AlertTitle } from "@mui/material";
import { authDataType, postDataType } from "../../../types/Global";

const Posts = () => {
  const params = useParams();
  const dispatch: AppDispatch = useDispatch();
  const user: authDataType | null = useSelector(
    (state: RootState) => state["auth"]["authData"]
  );
  let { posts, loading } = useSelector(
    (state: postDataType | object[]) => state["post"]
  );

  const userId: string | null = user && user._id!;

  useEffect(() => {
    dispatch(getTimelinePosts(userId));
  }, [dispatch, userId]);

  if (params.id)
    posts =
      posts &&
      posts.filter(
        (post: { userId: string | number }) => post.userId === params.id
      );

  return (
    <>
      <div style={{ height: "75vh", overflow: "scroll" }}>
        {!posts ? (
          <Alert variant="outlined" severity="info">
            <AlertTitle>Info</AlertTitle>
            No Posts Yet !
          </Alert>
        ) : (
          !loading &&
          posts.map((post: postDataType, id: number) => {
            return <Post data={post} key={id} />;
          })
        )}
      </div>
    </>
  );
};

export default Posts;
