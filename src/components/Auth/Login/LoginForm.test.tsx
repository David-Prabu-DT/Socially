import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import LoginForm from "./LoginForm";
const mockSubmit = jest.fn();

describe("Test for formik onSubmit", () => {
  it("should handle form submission", async () => {
    const { getByTestId } = render(<LoginForm />);

    //   const email = getByTestId("email");
    //    const form = getByTestId("form");

    //    act(() => {
    //       fireEvent.change(email, { target: { value: "abc@gmail.com" } });
    //    });

    //    act(() => {
    //       fireEvent.submit(form);
    //    });

    //    await waitFor(() => {
    //       expect(mockSubmit).toHaveBeenCalled();
    //    });
  });
});
