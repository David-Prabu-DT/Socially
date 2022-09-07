import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  it("should submit the login form", async () => {
    renderWithProvider(<LoginForm />);

    userEvent.type(screen.getByLabelText(/User Name/i), "david");
    userEvent.type(screen.getByLabelText(/^Password$/i), "12345678");

    // Click "Login" button
    screen.getByRole("button", { name: "Login" }).click();

    // Check to see if the button text changes, like a real user would.
    await waitFor(() =>
      expect(
        screen.getByRole("button", { name: "loading..." })
      ).toBeInTheDocument()
    );
  });
});
