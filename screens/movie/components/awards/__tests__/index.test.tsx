import React from "react";
import { render, screen } from "@testing-library/react";
import Awards from "..";

const defaultProps = { awards: "oscar" };

const Component = (props?) => {
  return render(<Awards {...defaultProps} {...props} />);
};

describe("<Awards/>", () => {
  it("Should show component.", () => {
    Component();

    expect(screen.getByTestId("awards-header")).toBeInTheDocument();
  });
});
