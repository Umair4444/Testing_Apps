// import { render } from "@testing-library/react";
// import Calculator from "@/components/Calculator";

// describe("Calculator Snapshot Test", () => {
//   it("matches the snapshot", () => {
//     const { asFragment } = render(<Calculator />);
//     expect(asFragment()).toMatchSnapshot();
//   });
// });

import { render } from "@testing-library/react";
import Calculator from "@/components/Calculator";
import Greeting from "@/components/Greeting";

describe("UI Snapshot Test", () => {
  it("matches the snapshot of Calculator + Greeting", () => {
    const { asFragment } = render(
      <>
        <Calculator />
        <Greeting name="Leonardo" />
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
