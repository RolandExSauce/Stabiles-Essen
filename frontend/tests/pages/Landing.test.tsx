// Landing.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Landing from "../../src/pages/Landing.js";
import { useNavHook } from "../../src/tools/custom.hooks.js";
import * as React from "react";


describe("LandingPage Component", () => {
  test("renders main elements correctly", () => {
    render(<Landing />);

    // Check main title and slogan
    expect(screen.getByText("SilverBack Kitchen")).toBeInTheDocument();
    expect(
      screen.getByText("Prepped and Primed. Now, let him cook")
    ).toBeInTheDocument();

    // Check logo (using alt text)
    expect(screen.getByAltText("SilverBack Kitchen Logo")).toBeInTheDocument();

    // Check buttons
    expect(
      screen.getByText(/Click here for a Quick Guide/i)
    ).toBeInTheDocument();
    expect(screen.getByText("Sign up now")).toBeInTheDocument();
    expect(screen.getByText("Go to Login")).toBeInTheDocument();
  });

  test("navigation links work", () => {
    const mockToLogin = jest.fn();
    const mockToRegister = jest.fn();

    // Update mock implementation
    (useNavHook as jest.Mock).mockImplementation(() => ({
      toLogin: mockToLogin,
      toRegister: mockToRegister,
    }));

    render(<Landing />);

    // Test register link
    fireEvent.click(screen.getByText("Sign up now"));
    expect(mockToRegister).toHaveBeenCalledTimes(1);

    // Test login link
    fireEvent.click(screen.getByText("Go to Login"));
    expect(mockToLogin).toHaveBeenCalledTimes(1);
  });

  test("quick guide button exists", () => {
    render(<Landing />);
    const guideButton = screen.getByRole("button", {
      name: /Click here for a Quick Guide/i,
    });
    expect(guideButton).toBeInTheDocument();
  });
});
