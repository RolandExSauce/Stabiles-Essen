import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Login from "../../src/pages/Login.js";
import * as React from "react";


describe("Login Component", () => {
  test("renders login form correctly", () => {
    render(<Login />);

    // Check title
    expect(screen.getByText("Login")).toBeInTheDocument();

    // Check inputs (assuming loginFormFields has email and password)
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();

    // Check button
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  test("allows typing in inputs", () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByRole("button", { name: "Login" });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "mypassword" } });

    // Submit the form
    fireEvent.click(submitButton);

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("mypassword");
  });
});
