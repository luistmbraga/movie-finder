import React from "react";
import { render, screen } from "@testing-library/react";
import OtherRatings from "..";

const defaultProps = { ratings: [{ source: "aqui", value: "50" }] };

const Component = (props?) => {
  return render(<OtherRatings {...defaultProps} {...props} />);
};

describe("<OtherRatings/>", () => {
  it("Should show component.", () => {
    Component();

    expect(screen.getByTestId("ratings-header")).toBeInTheDocument();
  });
});
