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
      AUTH_START: (_state, action: object) => {
         return { ..._state, loading: true, error: false };
      },
      AUTH_SUCCESS: (_state, action: any) => {
         console.log(action.payload.user);

         localStorage.setItem("profile", JSON.stringify({ ...action.payload.user }));

         return { ..._state, authData: action.payload.user, loading: false, error: false };
      },
      AUTH_FAIL: (_state, action) => {
         return { ..._state, loading: false, error: true };
      },
      UPDATING_START: (_state, action) => {
         return { ..._state, updateLoading: true, error: false };
      },
      UPDATING_SUCCESS: (_state, action: any) => {
         localStorage.setItem("profile", JSON.stringify({ ...action.data }));
         return {
            ..._state,
            authData: action.data,
            updateLoading: false,
            error: false,
         };
      },
      UPDATING_FAIL: (_state, action) => {
         return { ..._state, updateLoading: true, error: true };
      },

      FOLLOW_USER: (_state: any, action: any) => {
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
      UN_FOLLOW_USER: (_state, action: any) => { },
      LOG_OUT: (_state) => {
         localStorage.clear();
         return {
            ..._state,
            authData: null,
            loading: false,
            error: false,
            updateLoading: false,
         };
      },
   }

})