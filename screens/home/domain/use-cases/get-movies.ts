import MovieResult from "../../components/search-result-list/movie-card";
import { MovieSearchResult, Movies } from "../entities/movie-result";

export const getMoviesByTitle = async (title: string) => {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=d3757c7&page=1&type=movie&s=` + title
  );
  const data = await res.json();

  console.log(
    `http://www.omdbapi.com/?apikey=d3757c7&page=1&type=movie&s=` + title
  );

  if (!data || data.Response == "False") {
    return {totalresults: 0, movielist: []};
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
      totalresults: +data.totalResults
  }
};

export const getMoviesByPagination = async (page: number, title: string) => {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=d3757c7&page=${page}&type=movie&s=` + title
    );
    const data = await res.json();
  
    console.log(
      `http://www.omdbapi.com/?apikey=d3757c7&page=${page}&type=movie&s=` + title
    );
    
    if (!data || data.Response == "False") {
      return {totalresults: 0, movielist: []};
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
        totalresults: +data.totalResults
    }
  };