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
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should show pagination component.", () => {
    Component();

    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });

  it("Should not show pagination component.", () => {
    Component({ ...defaultProps, totalResults: 10 });

    expect(screen.queryByTestId("pagination")).not.toBeInTheDocument();
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
    expect(defaultProps.handleChangePage).toBeCalledTimes(1);
    expect(defaultProps.handleChangePage).toHaveBeenCalledWith(2);
  });

  it("Should return the page number when previous page was called", () => {
    Component({ ...defaultProps, page: 2 });

    fireEvent.click(screen.getByTestId("pagination-step-backwards"));
    expect(defaultProps.handleChangePage).toBeCalledTimes(1);
    expect(defaultProps.handleChangePage).toHaveBeenCalledWith(1);
  });

  it("Should return the page number when page is clicked", () => {
    Component();

    fireEvent.click(screen.getByTestId("smaller-pagination-2"));
    expect(defaultProps.handleChangePage).toBeCalledTimes(1);
    expect(defaultProps.handleChangePage).toHaveBeenCalledWith(2);
  });

  it("Should show smaller pagination component", () => {
    Component();

    expect(screen.getByTestId("smaller-pagination-1")).toBeInTheDocument();
  });

  it("Should show dots on the right", () => {
    Component({ ...defaultProps, totalResults: 100 });

    expect(screen.queryByTestId("left-dots")).not.toBeInTheDocument();
    expect(screen.getByTestId("right-dots")).toBeInTheDocument();
  });

  it("Should show dots on the left and on the right", () => {
    Component({ ...defaultProps, totalResults: 100, page: 5 });

    expect(screen.getByTestId("left-dots")).toBeInTheDocument();
    expect(screen.getByTestId("right-dots")).toBeInTheDocument();
  });

  it("Should only show dots on the left", () => {
    Component({ ...defaultProps, totalResults: 100, page: 9 });

    expect(screen.getByTestId("left-dots")).toBeInTheDocument();
    expect(screen.queryByTestId("right-dots")).not.toBeInTheDocument();
  });
});
