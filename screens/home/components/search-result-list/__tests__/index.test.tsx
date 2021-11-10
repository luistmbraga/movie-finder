import React from "react";
import { render, screen } from "@testing-library/react";
import { MovieSearchResult } from "../../../domain/entities/movie-result";
import SearchResults from "../index";

const defaultProps: Array<MovieSearchResult> = [
  {
    title: "test",
    year: "2021",
    poster: "https://123456",
    imdbid: "tt123456",
    type: "movie",
  },
];

const Component = (props?) => {
  return render(<SearchResults movies={defaultProps} />);
};

describe("<SearchResults/>", () => {
  it("Should ...", () => {
    Component();

    expect(screen.getByTestId("search-results")).toBeInTheDocument();
  });
});
