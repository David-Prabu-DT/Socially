import { authActions } from "./../store/ReduxStore";
import * as AuthApi from "../api/AuthRequests";
import { AppDispatch } from "../store/ReduxStore";

// ====Type Area
interface logInType {
  email?: string | number;
  password?: string | number;
}

interface signUpType {
  firstName?: string;
  lastName?: string;
  email?: string | number;
  password?: string | number;
}
// ==== Type Area

const { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, LOG_OUT } = authActions;

export const logIn =
  (formData: logInType, navigate: object | any) =>
    async (dispatch: AppDispatch) => {
      dispatch(AUTH_START);
      try {
        const { data }: any = await AuthApi.logIn(formData);

        console.log(data);

        dispatch(AUTH_SUCCESS(data));
        navigate("/home", { replace: true });
      } catch (error) {
        console.log(error);
        dispatch(AUTH_FAIL);
      }
    };

export const signUp =
  (formData: signUpType, navigate: object | any) =>
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

export const logout = () => async (dispatch: AppDispatch) => {
  dispatch(LOG_OUT);
};
