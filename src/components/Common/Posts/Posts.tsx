import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Post from "./Post";
import { getTimelinePosts } from "../../../actions/PostsAction";
import { AppDispatch, RootState } from "../../../store/ReduxStore";
import { Alert, AlertTitle } from "@mui/material";
import { AuthDataType, PostDataType } from "../../../types/Global";

const Posts = () => {
  const params = useParams();
  const dispatch: AppDispatch = useDispatch();
  const userData: AuthDataType | null = useSelector(
    (state: RootState) => state["auth"]["authData"]
  );
  const user: any | null = userData && userData["user"];

  let { posts, loading } = useSelector(
    (state: PostDataType | object[]) => state["post"]
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
      <div style={{ height: "90vh", overflow: "scroll" }}>
        {!posts ? (
          <Alert variant="outlined" severity="info">
            <AlertTitle>Info</AlertTitle>
            No Posts Yet !
          </Alert>
        ) : (
          !loading &&
          posts.map((post: PostDataType, id: number) => {
            return <Post data={post} key={id} />;
          })
        )}
      </div>
    </>
  );
};

export default Posts;
