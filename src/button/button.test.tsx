import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Button from "./index";

test("Button renders with correct label and triggers onClick", () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick} label="Click Me" />);

  const button = screen.getByText("Click Me");
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

