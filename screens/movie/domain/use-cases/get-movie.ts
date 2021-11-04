import { AnyAaaaRecord } from "dns";
import { Movie, Ratings, Rating } from "../entities/movie";

export const getMovie = async (id: string) => {
  const res = await fetch(
    `http://www.omdbapi.com/?i=${id}&apikey=d3757c7&plot=full`
  );
  const data = await res.json();

  if (!data) {
    return null;
  }

  var ratings = []
  if (data.Ratings || data.Ratings != []){
    ratings = data.Ratings.map((item: any) : Rating => {
      return ({source: item.Source, value: item.Value})
    })
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
      ratings: ratings
  });
}
