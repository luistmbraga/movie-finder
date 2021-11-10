import React from "react";
import { render, screen } from "@testing-library/react";
import { MovieSearchResult } from "../../../domain/entities/movie-result";
import MovieCard from "../movie-card";

const defaultProps: MovieSearchResult = {
  title: "test",
  year: "2021",
  poster: "https://123456",
  imdbid: "tt123456",
  type: "movie",
};

const Component = (props?) => {
  return render(<MovieCard {...defaultProps} {...props} />);
};

describe("<MovieCard/>", () => {
  it("Should show the card", () => {
    Component();

    const moviecard = screen.getByTestId("movie-card");

    expect(moviecard).toBeInTheDocument();
  });
});
