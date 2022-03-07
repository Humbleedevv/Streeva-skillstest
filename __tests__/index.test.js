import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("should render", () => {
    render(<Home />);

    const heading = screen.getByRole("main");

    expect(heading).toBeInTheDocument();
  });
});
