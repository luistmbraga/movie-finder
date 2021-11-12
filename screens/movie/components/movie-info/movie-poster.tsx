import {
  MoviePosterCard,
  PosterImg,
  PosterInfo,
  InfoRating,
  RatingSpan,
  IMdbVotes,
  IMDbRatingWrapper,
} from "./movie-poster.styled";

function MoviePoster({ poster, imdbrating, imdbvotes }) {
  return (
    <MoviePosterCard>
      <PosterImg src={poster == "N/A" ? "/default-movie.jpeg" : poster} />
      <PosterInfo>
        <IMDbRatingWrapper style={{ display: "flex", alignItems: "end" }}>
          <InfoRating>{imdbrating == "N/A" ? "0" : imdbrating}</InfoRating>
          <RatingSpan>/10 IMDb</RatingSpan>
        </IMDbRatingWrapper>
        <IMdbVotes>{imdbvotes == "N/A" ? "0" : imdbvotes} Votes</IMdbVotes>
      </PosterInfo>
    </MoviePosterCard>
  );
}

export default MoviePoster;
