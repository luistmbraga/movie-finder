import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Footer from "../components/footer";
import Head from "../components/head";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FoundMovies from "./components/search-result-list/index";
import React, { useState } from "react";
import {
  getMoviesByTitle,
  getMoviesByPagination,
} from "../home/domain/use-cases/get-movies";
import { Movies } from "../home/domain/entities/movie-result";
import Pages from "./components/pagination/index";

const HomeScreen: NextPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [state, setState] = useState<Movies>({
    movielist: [],
    totalresults: 0,
  });
  const [page, setPage] = useState(1);

  const handleChangeSearchInput = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(event.target.value);
  };

  const handleSearch = async (event: React.KeyboardEvent) => {
    if (event.which === 13) {
      const res = await getMoviesByTitle(inputValue);
      setState({ movielist: res.movielist, totalresults: res.totalresults });
    }
  };

  const handleChangePage = async (val: number) => {
    setPage(val);
    const res = await getMoviesByPagination(val, inputValue);
    setState({ movielist: res.movielist, totalresults: res.totalresults });
  };

  return (
    <div>
      <Head title="Movie Finder | Home" />

      <main className={styles.main}>
        <img src="logo.png" alt="logo" />

        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Search"
          value={inputValue}
          onChange={handleChangeSearchInput}
          onKeyPress={(event) => handleSearch(event)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          className={styles.description}
        />
        <FoundMovies movies={state.movielist} />
        <Pages
          totalResults={state.totalresults}
          page={page}
          handleChangePage={handleChangePage}
        />
      </main>

      <Footer />
    </div>
  );
};

export default HomeScreen;
