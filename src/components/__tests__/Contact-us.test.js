import { render, screen } from "@testing-library/react";
import ContactUs from "../Contact-us";
import "@testing-library/jest-dom";

describe("contact us page test case", () => {
  it("Should load contact us component", () => {
    //it and test are same.

    render(<ContactUs />);
    const headings = screen.getAllByRole("heading");

    //Assertion
    expect(headings.length).toBe(4); //to check if the heading is present in the component

    expect(
      screen.getByRole("heading", { name: /contact us/i })
    ).toBeInTheDocument();
  });

  test("button should be present", () => {
    render(<ContactUs />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
