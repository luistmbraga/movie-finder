import React from "react";
import { render, screen } from "@testing-library/react";
import MovieActors from "..";

const defaultProps = { actors: "eu, tu, ele" };

const Component = (props?) => {
  return render(<MovieActors {...defaultProps} {...props} />);
};

describe("<MovieActors/>", () => {
  it("Should show component.", () => {
    Component();

    expect(screen.getByTestId("actors-header")).toBeInTheDocument();
  });
});
