import { authActions } from "./../store/ReduxStore";
import * as AuthApi from "../api/AuthRequests";
import { AppDispatch } from "../store/ReduxStore";
import { logInType, signUpType } from "../types/Global";
import { NavigateFunction } from "react-router-dom";

const { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } = authActions;

export const logIn =
  (
    formData: logInType,
    responseHandler: { (res: any): void; (arg0: unknown): void }
  ) =>
  async (dispatch: AppDispatch) => {
    dispatch(AUTH_START);
    try {
      const { data } = await AuthApi.logIn(formData);
      console.log(data);

      dispatch(AUTH_SUCCESS(data));
      responseHandler(data);
    } catch (error) {
      responseHandler(error);
      dispatch(AUTH_FAIL);
    }
  };

export const signUp =
  (formData: signUpType, navigate: NavigateFunction) =>
  async (dispatch: AppDispatch) => {
    dispatch(AUTH_START);
    try {
      const { data } = await AuthApi.signUp(formData);
      dispatch(AUTH_SUCCESS(data));
      navigate("/home", { replace: true });
    } catch (error) {
      console.log(error);
      dispatch(AUTH_FAIL);
    }
  };
