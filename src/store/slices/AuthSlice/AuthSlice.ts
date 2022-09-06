import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authData: null,
  loading: false,
  error: false,
  updateLoading: false,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    AUTH_START: (_state) => {
      return { ..._state, loading: true, error: false };
    },
    AUTH_SUCCESS: (_state, action) => {
      localStorage.setItem(
        "profile",
        JSON.stringify({ ...action.payload })
      );
      return {
        ..._state,
        authData: action.payload.user,
        loading: false,
        error: false,
      };
    },
    AUTH_FAIL: (_state) => {
      return { ..._state, loading: false, error: true };
    },
    UPDATING_START: (_state) => {
      return { ..._state, updateLoading: true, error: false };
    },
    
    UPDATING_SUCCESS: (_state, action) => {
      return {
        ..._state,
        authData: action.payload.user,
        updateLoading: false,
        error: false,
      };
    },
    UPDATING_FAIL: (_state) => {
      return { ..._state, updateLoading: true, error: true };
    },
    FOLLOW_USER: (_state: any, action) => {
      return {
        ..._state,
        authData: {
          ..._state?.authData,
          following: [..._state?.authData?.following, action.payload],
        },
      };
    },
    UN_FOLLOW_USER: (_state: any, action) => {
      return {
        ..._state,
        authData: {
          ..._state?.authData,
          following: [
            ..._state?.authData?.following.filter(
              (personId: number) => personId !== action.payload
            ),
          ],
        },
      };
    },
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
  },

});


// For Test Purpose
export const AuthReducer = AuthSlice.reducer