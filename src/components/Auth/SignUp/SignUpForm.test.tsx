import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  it("should submit the login form", async () => {
    renderWithProvider(<SignUpForm />);

    userEvent.type(screen.getByLabelText(/First Name/i), "david");
    userEvent.type(screen.getByLabelText(/Last Name/i), 'prabu')
    userEvent.type(screen.getByLabelText(/User Name/i), 'davidprabu')
    userEvent.type(screen.getByLabelText(/^Password$/i), "12345678");

    // Click "Sign up" button
    screen.getByRole("button", { name: "Sign Up" }).click();

    // Check to see if the button text changes, like a real user would.
    await waitFor(() =>
      expect(
        screen.getByRole("button", { name: "Sign Up" })
      ).toBeInTheDocument()
    );
  });
});
