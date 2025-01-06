import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import AuthForm from "./auth-form";

// const mockSetSignIn = vi.fn();
// const mockSetSignIn = vi.fn((fn) => fn(true));
const mockSetSignIn = vi.fn((fn) => (typeof fn === "function" ? fn(true) : fn));

describe("auth-form", () => {
  test("auth-form:health-check", () => {
    expect(1).toBe(1);
  });

  test("auth-form:render-signin-mode", () => {
    render(<AuthForm signIn={true} setSignIn={mockSetSignIn} />);

    const signInHeading = screen.getByRole("heading", {
      name: /sign in to your account/i,
    });
    expect(signInHeading).toBeInTheDocument();

    const signInButton = screen.getByRole("button", { name: /sign in/i });
    expect(signInButton).toBeInTheDocument();

    const toggleButton = screen.getByRole("button", {
      name: /start a 14 day free trial/i,
    });
    expect(toggleButton).toBeInTheDocument();
  });

  test("auth-form:render-signup-mode", () => {
    render(<AuthForm signIn={false} setSignIn={mockSetSignIn} />);

    const signUpHeading = screen.getByRole("heading", {
      name: /sign up to your account/i,
    });
    expect(signUpHeading).toBeInTheDocument();

    const signUpButton = screen.getByRole("button", { name: /sign up/i });
    expect(signUpButton).toBeInTheDocument();

    const toggleButton = screen.getByRole("button", { name: /sign in/i });
    expect(toggleButton).toBeInTheDocument();
  });

  test("auth-form:render-input-fields", () => {
    render(<AuthForm signIn={true} setSignIn={mockSetSignIn} />);

    const emailInput = screen.getByRole("textbox", { name: /email address/i });
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toBeInTheDocument();
  });

  test("auth-form:render-forgot-password-link-in-signin-mode", () => {
    render(<AuthForm signIn={true} setSignIn={mockSetSignIn} />);

    const forgotPasswordLink = screen.getByText(/forgot password\?/i);
    expect(forgotPasswordLink).toBeInTheDocument();
  });

  test("auth-form:not-render-forgot-password-link-in-signup-mode", () => {
    render(<AuthForm signIn={false} setSignIn={mockSetSignIn} />);

    const forgotPasswordLink = screen.queryByText(/forgot password\?/i);
    expect(forgotPasswordLink).not.toBeInTheDocument();
  });

  test("auth-form:form-submission-button", () => {
    const { rerender } = render(
      <AuthForm signIn={true} setSignIn={mockSetSignIn} />
    );

    let submitButton = screen.getByRole("button", { name: /sign in/i });
    expect(submitButton).toBeInTheDocument();

    rerender(<AuthForm signIn={false} setSignIn={mockSetSignIn} />);
    submitButton = screen.getByRole("button", { name: /sign up/i });
    expect(submitButton).toBeInTheDocument();
  });

  test("auth-form:toggle-form", () => {
    render(<AuthForm signIn={true} setSignIn={mockSetSignIn} />);

    const toggleButton = screen.getByRole("button", {
      name: /start a 14 day free trial/i,
    });
    fireEvent.click(toggleButton);

    expect(mockSetSignIn).toHaveBeenCalledTimes(1);
    expect(mockSetSignIn).toHaveBeenCalledWith(expect.any(Function));
    expect(mockSetSignIn.mock.calls[0][0](true)).toBe(false);
  });
});
