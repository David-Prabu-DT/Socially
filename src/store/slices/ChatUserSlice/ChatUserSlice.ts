import { createSlice } from "@reduxjs/toolkit";

const initialState = { chatUsers: [], loading: false, error: false };

export const ChatUserSlice = createSlice({
   name: "chatUser",
   initialState: initialState,
   reducers: {
      SAVE_USER: (_state: any, action) => {
         return ({ ..._state, chatUsers: [..._state.chatUsers, action.payload] });

      }
   }
})