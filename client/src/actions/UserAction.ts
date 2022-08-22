import * as UserApi from "../api/UserRequests";
import { AppDispatch } from "../store/ReduxStore";
interface signUpType {
    firstName?: string;
    lastName?: string;
    email?: string | number;
    password?: string | number;
}

export const updateUser = (id: string | number, formData: signUpType) => async (dispatch: AppDispatch) => {
    dispatch({ type: "UPDATING_START" })
    try {
        const { data } = await UserApi.updateUser(id, formData);
        console.log("Action ko receive hoa hy ye : ", data)
        dispatch({ type: "UPDATING_SUCCESS", data: data })
    }
    catch (error) {
        dispatch({ type: "UPDATING_FAIL" })
    }
}


export const followUser = <T>(id: string | number, data: T) => async (dispatch: AppDispatch) => {
    dispatch({ type: "FOLLOW_USER", data: id })
    UserApi.followUser(id, data)
}

export const unFollowUser = <T>(id: string | number, data: T) => async (dispatch: AppDispatch) => {
    dispatch({ type: "unFollow_USER", data: id })
    UserApi.unFollowUser(id, data)
}