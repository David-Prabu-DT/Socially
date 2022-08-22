import * as UploadApi from "../api/UploadRequest";
import { AppDispatch } from "../store/ReduxStore";

export const uploadImage = (data: Blob | null) => async (dispatch: AppDispatch) => {
  try {
    console.log("Image upload Action start ho gya hy")
    await UploadApi.uploadImage(data);
  } catch (error) {
    console.log(error);
  }
};

export const uploadPost = (data: Blob | string | null) => async (dispatch: AppDispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newPost = await UploadApi.uploadPost(data);
    dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};
