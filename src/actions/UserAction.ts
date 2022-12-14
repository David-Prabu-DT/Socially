import * as UserApi from "../api/UserRequests";
import { AppDispatch, authActions } from "../store/ReduxStore";


const {
  UPDATING_START,
  UPDATING_SUCCESS,
  UPDATING_FAIL,
  FOLLOW_USER,
  UN_FOLLOW_USER,
} = authActions;

export const updateUser: any =
  (id: string | undefined, formData: object[]) =>
    async (dispatch: AppDispatch) => {
      dispatch(UPDATING_START);
      try {
        const { data } = await UserApi.updateUser(id, formData);
        dispatch(UPDATING_SUCCESS(data));
      } catch (error) {
        dispatch(UPDATING_FAIL);
      }
    };

export const followUser =
  <T>(id: string | number, data: T) =>
    async (dispatch: AppDispatch) => {
      UserApi.followUser(id, data);
      dispatch(FOLLOW_USER(data));
    };

export const unFollowUser =
  <T>(id: string | number, data: T) =>
    async (dispatch: AppDispatch) => {
      UserApi.unFollowUser(id, data);
      dispatch(UN_FOLLOW_USER(data));
    };
