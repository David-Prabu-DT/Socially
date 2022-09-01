import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../../../store/ReduxStore";
import LoginForm from "./LoginForm";
// const mockSubmit = jest.fn();

describe("Test for formik onSubmit", () => {
  it("Login Form To Be in the document", () => {
    render(
      <>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <LoginForm />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </>
    );
    const form = screen.getByTestId("form");
    const password = screen.getByTestId("password");
    const username = screen.getByTestId("username");

    expect(form).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(username).toBeInTheDocument();
  });
});
