import React from "react";
import { Movie } from "../../domain/entities/movie";
import MoviePoster from "./movie-poster";
import {
  MovieInfoWrapper,
  MovieInfoCard,
  MovieTitle,
  InfoList,
} from "./index.styled";

function MovieInfo({
  poster,
  imdbrating,
  imdbvotes,
  title,
  year,
  rated,
  runtime,
  genre,
  plot,
}: Movie) {
  return (
    <>
      <MoviePoster
        poster={poster}
        imdbrating={imdbrating}
        imdbvotes={imdbvotes}
      />
      <MovieInfoCard>
        <MovieTitle>{`${title} (${year})`}</MovieTitle>
        <div>
          <InfoList>
            <li>{rated == "N/A" ? "" : rated}</li>
            <li>{runtime == "N/A" ? "" : runtime}</li>
            <li>{genre == "N/A" ? "" : genre}</li>
          </InfoList>
          <p>{plot == "N/A" ? "" : plot}</p>
        </div>
      </MovieInfoCard>
    </>
  );
}

export default MovieInfo;
