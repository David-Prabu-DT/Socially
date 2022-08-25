import * as UploadApi from "../api/UploadRequest";
import { AppDispatch, postActions } from "../store/ReduxStore";

const { UPLOAD_START, UPLOAD_SUCCESS, UPLOAD_FAIL } = postActions;

export const uploadImage =
  (data: Blob | null) => async (dispatch: AppDispatch) => {
    try {
      console.log("Image upload Action started");
      await UploadApi.uploadImage(data);
    } catch (error) {
      console.log(error);
    }
  };

export const uploadPost =
  (data: Blob | string | null) => async (dispatch: AppDispatch) => {
    dispatch(UPLOAD_START);
    try {
      const newPost = await UploadApi.uploadPost(data);
      dispatch(UPLOAD_SUCCESS(newPost.data));
    } catch (error) {
      console.log(error);
      dispatch(UPLOAD_FAIL);
    }
  };
