import { createSlice } from "@reduxjs/toolkit";

const initialState = { posts: null, loading: false, error: false, uploading: false }

export const PostSlice = createSlice({
   name: "post",
   initialState: initialState,
   reducers: {
      UPLOAD_START: (_state) => {
         return { ..._state, error: false, uploading: true };
      },
      UPLOAD_SUCCESS: (_state: any, action) => {
         return {
            ..._state,
            posts: [action.payload, ..._state.posts],
            uploading: false,
            error: false,
         };
      },
      UPLOAD_FAIL: (_state) => {
         return { ..._state, uploading: false, error: true };
      },
      RETRIEVING_START: (_state) => {
         return { ..._state, loading: true, error: false };
      },
      RETRIEVING_SUCCESS: (_state, action) => {
         return { ..._state, posts: action.payload, loading: false, error: false };

      },
      RETRIEVING_FAIL: (_state) => {
         return { ..._state, loading: false, error: true };
      }
   }
})