import { render, screen } from "@testing-library/react";
import Greeting from "@/components/Greeting";

describe("Greeting Component", () => {
  it("renders the correct greeting message", () => {
    render(<Greeting name="Umair" />);
    const heading = screen.getByText(/Hello, Umair/i);
    expect(heading).toBeInTheDocument();
  });
});
