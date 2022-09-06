import { screen } from "@testing-library/react";
import React from "react";
import { renderWithProvider } from "../../../utils/testUtils";
import SignUpForm from "./SignUpForm";

describe("Sign Up Form", () => {
  it("Sign Up Form To Be in the document", () => {
    renderWithProvider(<SignUpForm />);

    const form = screen.getByTestId("form");
    const firstname = screen.getByTestId("firstname");
    const lastname = screen.getByTestId("lastname");
    const password = screen.getByTestId("password");
    const username = screen.getByTestId("username");
    const submitBtn = screen.getByTestId("submitBtn");

    expect(form).toBeInTheDocument();
    expect(firstname).toBeInTheDocument();
    expect(lastname).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });
});
