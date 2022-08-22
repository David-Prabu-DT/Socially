import { createSlice } from "@reduxjs/toolkit";

const initialState = { posts: null, loading: false, error: false, uploading: false }

export const PostSlice = createSlice({
   name: "post",
   initialState: initialState,
   reducers: {
      uploadStart(_state, action: any) {
         return { ..._state, error: false, uploading: true };
      },
      uploadSuccess(_state: any, action: any) {
         return {
            ..._state,
            posts: [action.data, ..._state.posts],
            uploading: false,
            error: false,
         };
      },
      uploadFail(_state, action: any) {
         return { ..._state, uploading: false, error: true };
      },
      retrievingStart(_state, action: any) {
         return { ..._state, loading: true, error: false };
      },
      retrievingSuccess(_state, action: any) {
         return { ..._state, posts: action.data, loading: false, error: false };

      },
      retrievingFail(_state, action: any) {
         return { ..._state, loading: false, error: true };
      }
   }
})