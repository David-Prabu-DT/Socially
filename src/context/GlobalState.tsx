import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./reducer/AppReducer";
import { TrendsData } from "../Data/TrendsData";
const initialState = {};

export const GlobalContext = createContext(initialState);

export const GlobalProvider: React.FC<React.ReactNode> = ({
  children,
}: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    getTrendData(TrendsData);
  }, []);

  const getTrendData = (trendData: object[]) => {
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
