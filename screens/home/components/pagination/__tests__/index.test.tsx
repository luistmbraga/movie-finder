import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "..";

const defaultProps = {
  totalResults: 11,
  page: 1,
  handleChangePage: jest.fn(),
};

const Component = (props?) => {
  return render(<Pagination {...defaultProps} {...props} />);
};

describe("<Pagination/>", () => {
  it("Should show pagination component.", () => {
    Component();

    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });

  it("Should not show pagination component.", () => {
    Component({ ...defaultProps, totalResults: 10 });

  });

  it("Should not show pagination backwards component.", () => {
    Component();

    expect(
      screen.queryByTestId("pagination-step-backwards")
    ).not.toBeInTheDocument();
  });

  it("Should show pagination backwards component.", () => {
    Component({ ...defaultProps, page: 2 });

    expect(screen.getByTestId("pagination-step-backwards")).toBeInTheDocument();
  });

  it("Should not show pagination forward component.", () => {
    Component({ ...defaultProps, page: 2 });

    expect(
      screen.queryByTestId("pagination-step-forwards")
    ).not.toBeInTheDocument();
  });

  it("Should show pagination forward component.", () => {
    Component();

    expect(screen.getByTestId("pagination-step-forwards")).toBeInTheDocument();
  });

  it("Should return the page number when next page was called", () => {
    Component();

    fireEvent.click(screen.getByTestId("pagination-step-forwards"));
    expect(defaultProps.handleChangePage).toHaveBeenCalledWith(2);
  });

  it("Should return the page number when previous page was called", () => {
    Component({ ...defaultProps, page: 2 });

    fireEvent.click(screen.getByTestId("pagination-step-backwards"));
    expect(defaultProps.handleChangePage).toHaveBeenCalledWith(1);
  });
});
