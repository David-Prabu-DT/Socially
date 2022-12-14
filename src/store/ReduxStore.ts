
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { AuthSlice } from "./slices/AuthSlice/AuthSlice";
import storage from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import { ChatUserSlice } from "./slices/ChatUserSlice/ChatUserSlice";
import { PostSlice } from "./slices/PostSlice/PostSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: AuthSlice.reducer,
  chatUser: ChatUserSlice.reducer,
  post: PostSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })

});

export default store;
export const persister = persistStore(store);

export const authActions = AuthSlice.actions;
export const chatUserActions = ChatUserSlice.actions;
export const postActions = PostSlice.actions;
