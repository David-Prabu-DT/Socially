import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   authData: null,
   loading: false,
   error: false,
   updateLoading: false,
}

export const AuthSlice = createSlice({
   name: "auth",
   initialState: initialState,
   reducers: {
      authStart(_state, action: object) {
         return { ..._state, loading: true, error: false };
      },
      authSuccess(_state, action: any) {
         localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

         return { ..._state, authData: action.data, loading: false, error: false };
      },
      authFail(_state, action) {
         return { ..._state, loading: false, error: true };
      },
      updatingStart(_state, action) {
         return { ..._state, updateLoading: true, error: false };
      },
      updatingSuccess(_state, action: any) {
         localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
         return {
            ..._state,
            authData: action.data,
            updateLoading: false,
            error: false,
         };
      },
      updatingFail(_state, action) {
         return { ..._state, updateLoading: true, error: true };
      },
      logOut(_state, action) {
         localStorage.clear();
         return {
            ..._state,
            authData: null,
            loading: false,
            error: false,
            updateLoading: false,
         };
      },
      followUser(_state: any, action: any) {
         return {
            ..._state,
            authData: {
               ..._state.authData,
               user: {
                  ..._state.authData.user,
                  following: [..._state.authData.user.following, action.data],
               },
            },
         };
      },
      unFollowUser(_state) { }
   }

})