import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./reducer/AppReducer";
import axios from "axios";

const initialState = {};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL)
      .then((response) => getTrendData(response.data));
  }, []);

  const getTrendData = (trendData: any) => {
    dispatch({
      type: "GET_TRENDS_DATA",
      payload: trendData,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        trendData: state.trendData,
        getTrendData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
