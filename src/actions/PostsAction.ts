import * as PostsApi from "../api/PostsRequests";
import { AppDispatch, postActions } from "../store/ReduxStore";

const { RETRIEVING_START, RETRIEVING_SUCCESS, RETRIEVING_FAIL } = postActions;

export const getTimelinePosts =
  (id: string | number) => async (dispatch: AppDispatch) => {
    dispatch(RETRIEVING_START);
    try {
      const { data } = await PostsApi.getTimelinePosts(id);
      dispatch(RETRIEVING_SUCCESS(data));
    } catch (error) {
      console.log(error);
      dispatch(RETRIEVING_FAIL);
    }
  };
