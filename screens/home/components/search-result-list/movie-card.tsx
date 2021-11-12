import React from "react";
import { MovieSearchResult } from "../../domain/entities/movie-result";
import {
  MovieWrapper,
  MovieImg,
  MovieInfoWrapper,
  MovieTitle,
} from "./movie-card.styled";

function MovieCard({ title, year, poster, imdbid }: MovieSearchResult) {
  return (
    <MovieWrapper
      href={"http://localhost:3000/movie?id=" + imdbid}
      data-testid="movie-card"
    >
      <MovieImg src={poster == "N/A" ? "/default-movie.jpeg" : poster} />
      <MovieInfoWrapper>
        <MovieTitle>{title}</MovieTitle>
        <p>{year}</p>
      </MovieInfoWrapper>
    </MovieWrapper>
  );
}

export default MovieCard;
