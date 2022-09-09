import { authActions } from "./../store/ReduxStore";
import * as AuthApi from "../api/AuthRequests";
import { AppDispatch } from "../store/ReduxStore";
import { LogInType, SignUpType } from "../types/Global";
import { NavigateFunction } from "react-router-dom";

const { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } = authActions;

export const logIn =
  (
    formData: LogInType,
    responseHandler: Function
  ) =>
    async (dispatch: AppDispatch) => {
      dispatch(AUTH_START);
      try {
        const { data } = await AuthApi.logIn(formData);
        dispatch(AUTH_SUCCESS(data));
      } catch (error) {
        responseHandler(error);
        dispatch(AUTH_FAIL);
      }
    };

export const signUp =
  (formData: SignUpType, navigate: NavigateFunction, responseHandler: Function) =>
    async (dispatch: AppDispatch) => {
      dispatch(AUTH_START);
      try {
        const { data } = await AuthApi.signUp(formData);
        dispatch(AUTH_SUCCESS(data));
        responseHandler(data);

        setTimeout(() => {
          navigate("/home", { replace: true });
        }, 2000);
      } catch (error) {
        responseHandler(error);
        dispatch(AUTH_FAIL);
      }
    };
