import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./slices/AuthSlice";
import { ChatUserSlice } from "./slices/ChatUserSlice";
import { PostSlice } from "./slices/PostSlice";


const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    chatUser: ChatUserSlice.reducer,
    post: PostSlice.reducer
  },
})

export default store;

export const authActions = AuthSlice.actions;
export const chatUserActions = ChatUserSlice.actions;
export const postActions = PostSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;