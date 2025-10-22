import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "@/components/Calculator";

describe("Calculator", () => {
  it("adds two numbers", () => {
    render(<Calculator />);
    fireEvent.change(screen.getByPlaceholderText(/Enter first number/i), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter second number/i), {
      target: { value: "3" },
    });
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByText(/Result:/i)).toHaveTextContent("7");
  });
});
