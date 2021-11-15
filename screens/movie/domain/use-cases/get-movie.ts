import { Movie } from "../entities/movie";
import { BASE_IMDB_MOVIES_URL, IMDB_MOVIES_APKEY } from "screens/constants";

export const getMovie = async (id) => {
  const res = await fetch(
    `${BASE_IMDB_MOVIES_URL}${IMDB_MOVIES_APKEY}&i=${id}&&plot=full`
  );
  const data = await res.json();

  if (!data) {
    return null;
  }

  var ratings = [];
  if (data.Ratings || data.Ratings != []) {
    ratings = data.Ratings.map((item) => {
      return { source: item.Source, value: item.Value };
    });
  }

  return new Movie({
    title: data.Title,
    year: data.Year,
    rated: data.Rated,
    imdbrating: data.imdbRating,
    imdbvotes: data.imdbVotes,
    runtime: data.Runtime,
    genre: data.Genre,
    plot: data.Plot,
    poster: data.Poster,
    actors: data.Actors,
    awards: data.Awards,
    ratings: ratings,
  });
};
