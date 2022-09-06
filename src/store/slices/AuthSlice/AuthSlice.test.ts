import { configureStore } from '@reduxjs/toolkit';
import { authActions } from './../../ReduxStore';
import { AuthReducer, AuthSlice } from "./AuthSlice";


const {
   AUTH_START,
   AUTH_SUCCESS,
   AUTH_FAIL,
   UPDATING_START,
   UPDATING_SUCCESS,
   UPDATING_FAIL,
   LOG_OUT
} = authActions;


describe("Auth Reducer", () => {
   it("should return the initial state when passed an empty action", () => {
      const initialState = {
         authData: null,
         loading: false,
         error: false,
         updateLoading: false,
      };

      const action = { type: "" };
      const state = AuthReducer(initialState, action);
      expect(state).toEqual({
         authData: null,
         loading: false,
         error: false,
         updateLoading: false
      })
   })

   test("AUTH_START", () => {
      const initialState = {
         authData: null,
         loading: false,
         error: false,
         updateLoading: false,
      };
      const action = AUTH_START();
      const state = AuthReducer(initialState, action);
      expect(state).toEqual({ ...initialState, loading: true, error: false });
   })



   test("AUTH_SUCCESS", () => {
      const store = configureStore({ reducer: AuthSlice.reducer });

      store.dispatch(AUTH_SUCCESS({
         authData: {
            username: "david",
            password: "12345678",
         }
      }));

      expect(store.getState()).toEqual({
         authData: undefined,
         error: false,
         loading: false,
         updateLoading: false,
      });
   });

   test("AUTH_FAIL", () => {
      const initialState = {
         authData: null,
         loading: false,
         error: false,
         updateLoading: false,
      };
      const action = AUTH_FAIL();
      const state = AuthReducer(initialState, action);
      expect(state).toEqual({ ...initialState, loading: false, error: true });
   })

   test("UPDATING_START", () => {
      const initialState = {
         authData: null,
         loading: false,
         error: false,
         updateLoading: false,
      };
      const action = UPDATING_START();
      const state = AuthReducer(initialState, action);
      expect(state).toEqual({ ...initialState, updateLoading: true, error: false });
   });


   test("UPDATING_SUCCESS", () => {
      const store = configureStore({ reducer: AuthSlice.reducer });

      store.dispatch(UPDATING_SUCCESS({
         authData: {
            username: "david",
            password: "12345678",
         }
      }));

      expect(store.getState()).toEqual({
         authData: undefined,
         error: false,
         loading: false,
         updateLoading: false,
      });
   })



   test("UPDATING_FAIL", () => {
      const initialState = {
         authData: null,
         loading: false,
         error: false,
         updateLoading: false,
      };
      const action = UPDATING_FAIL();
      const state = AuthReducer(initialState, action);
      expect(state).toEqual({ ...initialState, updateLoading: true, error: true });
   })

   test("LOG_OUT", () => {
      const initialState = {
         authData: null,
         loading: false,
         error: false,
         updateLoading: false,
      };
      const action = LOG_OUT();
      const state = AuthReducer(initialState, action);
      expect(state).toEqual({
         ...initialState,
         authData: null,
         loading: false,
         error: false,
         updateLoading: false,
      });
   })
})