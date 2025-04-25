import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Register from "../../src/pages/Register.js";


describe("Register Component", () => {
  test("renders Register form correctly", () => {
    render(<Register />);

    // Check title
    expect(screen.getByText("Register")).toBeInTheDocument();

    // Check inputs (assuming RegisterFormFields has email and password)
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();

    // Check button
    expect(screen.getByRole("button", { name: "Register" })).toBeInTheDocument();
  });

  test("allows typing in inputs", () => {
    render(<Register />);

    const usernameInput = screen.getByPlaceholderText("Username");
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByRole("button", { name: "Register" });

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "mypassword" } });

    // Submit the form
    fireEvent.click(submitButton);

    expect(usernameInput).toHaveValue("testuser");
    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("mypassword");
  });
});
