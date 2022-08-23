import * as PostsApi from "../api/PostsRequests";
import { AppDispatch } from "../store/ReduxStore";

export const getTimelinePosts = (id: string | number) => async (dispatch: AppDispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await PostsApi.getTimelinePosts(id);
    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_FAIL" });
  }
};
