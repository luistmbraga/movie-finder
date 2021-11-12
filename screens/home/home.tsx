import React, { useState } from "react";
import Footer from "../components/footer";
import Head from "../components/head";
import FoundMovies from "./components/search-result-list/index";
import {
  getMoviesByTitle,
  getMoviesByPagination,
} from "../home/domain/use-cases/get-movies";
import { Movies } from "../home/domain/entities/movie-result";
import Pagination from "./components/pagination/index";
import TopBar from "../components/topbar";
import { BaseLayout } from "screens/components/base-layout.styled";
import { ContentLayout } from "screens/components/content-layout.styled";
import { InputSearch, InputSearchWrapper, HomeWrapper } from "./home.styled";

const HomeScreen = () => {
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
    <>
      <Head title="Movie Finder | Home" />

      <BaseLayout>
        <TopBar />

        <ContentLayout>
          <HomeWrapper>
            <InputSearchWrapper>
              <InputSearch
                type="text"
                placeholder="Search Movie..."
                value={inputValue}
                onChange={handleChangeSearchInput}
                onKeyPress={(event) => handleSearch(event)}
              ></InputSearch>
            </InputSearchWrapper>
            <FoundMovies movies={state.movielist} />
            <Pagination
              page={page}
              totalResults={state.totalresults}
              handleChangePage={handleChangePage}
            />
          </HomeWrapper>
        </ContentLayout>

        <Footer />
      </BaseLayout>
    </>
  );
};

export default HomeScreen;
