import * as UserApi from "../api/UserRequests";
import { AppDispatch, authActions } from "../store/ReduxStore";


const {
  UPDATING_START,
  UPDATING_SUCCESS,
  UPDATING_FAIL,
  FOLLOW_USER,
  UN_FOLLOW_USER,
} = authActions;

export const updateUser =
  (id: string, formData: any) =>
    async (dispatch: AppDispatch) => {
      dispatch(UPDATING_START);
      try {
        const { data } = await UserApi.updateUser(id, formData);
        console.log(data, "asduasgdyuau");
        dispatch(UPDATING_SUCCESS(data));
      } catch (error) {
        dispatch(UPDATING_FAIL);
      }
    };

export const followUser =
  <T>(id: string | number, data: T) =>
    async (dispatch: AppDispatch) => {
      UserApi.followUser(id, data);
      dispatch(FOLLOW_USER(id));
    };

export const unFollowUser =
  <T>(id: string | number, data: T) =>
    async (dispatch: AppDispatch) => {
      dispatch(UN_FOLLOW_USER(id));
      UserApi.unFollowUser(id, data);
    };
