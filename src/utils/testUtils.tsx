import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { persister as persist } from "../store/ReduxStore";

export const renderWithProvider = (element: React.ReactElement) => {
  render(
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
          <BrowserRouter>{element} </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
};
