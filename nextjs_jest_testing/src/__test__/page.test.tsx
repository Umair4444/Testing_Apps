// import '@testing-library/jest-dom'
// import { render, screen } from '@testing-library/react'
// import Page from '../app/page'
 
// describe('Page', () => {
//   it('renders a heading', () => {
//     render(<Page />)
 
//     const heading = screen.getByRole('heading', { level: 1 })
 
//     expect(heading).toBeInTheDocument()
//   })
// })

import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

test("renders the heading", () => {
  render(<Page />);
  const headings = screen.getAllByRole("heading", { level: 1 });
  expect(headings[0]).toHaveTextContent("🧮 Simple Calculator");  // or index 1 if needed
});
