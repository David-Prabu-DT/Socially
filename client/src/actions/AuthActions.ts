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

export const logIn = (formData: logInType, navigate: any) => async (dispatch: AppDispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
    navigate("../home", { replace: true });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const signUp = (formData: signUpType, navigate: any) => async (dispatch: AppDispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
    navigate("../home", { replace: true });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};


export const logout = () => async (dispatch: AppDispatch) => {
  dispatch({ type: "LOG_OUT" })
}
