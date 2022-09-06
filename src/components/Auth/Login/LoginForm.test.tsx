import { screen } from "@testing-library/react";
import React from "react";
import { renderWithProvider } from "../../../utils/testUtils";

import LoginForm from "./LoginForm";

describe("Login Form", () => {
  it("Login Form To Be in the document", () => {
    renderWithProvider(<LoginForm />);

    const form = screen.getByTestId("form");
    const password = screen.getByTestId("password");
    const username = screen.getByTestId("username");
    const submitBtn = screen.getByTestId("submitBtn");

    expect(form).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(username).toBeInTheDocument();

    expect(submitBtn).toBeInTheDocument();
  });
});
