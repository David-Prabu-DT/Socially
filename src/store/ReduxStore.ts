import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./slices/AuthSlice";
import { ChatUserSlice } from "./slices/ChatUserSlice";
import { PostSlice } from "./slices/PostSlice";
import storage from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from "redux-thunk";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  auth: AuthSlice.reducer,
  chatUser: ChatUserSlice.reducer,
  post: PostSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]

})

export default store;
export const persistor = persistStore(store)

export const authActions = AuthSlice.actions;
export const chatUserActions = ChatUserSlice.actions;
export const postActions = PostSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;