import React from "react";
import { MovieSearchResult } from "../../domain/entities/movie-result";
import MovieCard from "./movie-card";
import { ResultsList } from "./index.styled";

function SearchResults({ movies }: { movies: Array<MovieSearchResult> }) {
  return (
    <ResultsList data-testid="search-results">
      {movies.map((item) => (
        <MovieCard
          key={item.imdbid}
          title={item.title}
          year={item.year}
          poster={item.poster}
          imdbid={item.imdbid}
          type={item.type}
        />
      ))}
    </ResultsList>
  );
}

export default SearchResults;
