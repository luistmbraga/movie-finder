import { MovieSearchResult, Movies } from "../entities/movie-result";
import { BASE_IMDB_MOVIES_URL, IMDB_MOVIES_APKEY } from "screens/constants";

export const getMoviesByTitle = async (title: string) => {
  const res = await fetch(
    `${BASE_IMDB_MOVIES_URL}${IMDB_MOVIES_APKEY}&page=1&type=movie&s=${title}`
  );
  const data = await res.json();

  if (!data || data.Response == "False") {
    return { totalresults: 0, movielist: [] };
  }

  return {
    movielist: data.Search.map((elem: any) => {
      return new MovieSearchResult({
        title: elem.Title,
        year: elem.Year,
        imdbid: elem.imdbID,
        poster: elem.Poster,
      });
    }),
    totalresults: +data.totalResults,
  };
};

export const getMoviesByPagination = async (page: number, title: string) => {
  const res = await fetch(
    `${BASE_IMDB_MOVIES_URL}${IMDB_MOVIES_APKEY}&page=${page}&type=movie&s=${title}`
  );
  const data = await res.json();

  if (!data || data.Response == "False") {
    return { totalresults: 0, movielist: [] };
  }

  return {
    movielist: data.Search.map((elem: any) => {
      return new MovieSearchResult({
        title: elem.Title,
        year: elem.Year,
        imdbid: elem.imdbID,
        poster: elem.Poster,
      });
    }),
    totalresults: +data.totalResults,
  };
};
