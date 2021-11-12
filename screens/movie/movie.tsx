import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/footer";
import Head from "../components/head";
import { getMovie } from "./domain/use-cases/get-movie";
import MovieInfo from "./components/movie-info/index";
import MovieActors from "./components/movie-actors/index";
import Awards from "./components/awards/index";
import OtherRatings from "./components/ratings/index";
import { BaseLayout } from "screens/components/base-layout.styled";
import { ContentLayout } from "screens/components/content-layout.styled";
import TopBar from "../components/topbar";
import { MovieWrapper } from "./movie.styled";

function MovieScreen() {
  const [m, setMovie] = useState(null);
  const router = useRouter();
  const id = router.query.id!;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getMovie(id);
        setMovie(res);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [id]);

  if (m == null) return <div>Loading</div>;

  return (
    <>
      <Head title={"Movie Finder | " + m.title} />

      <BaseLayout>
        <TopBar />
        <ContentLayout>
          <MovieWrapper>
            <MovieInfo
              poster={m.poster}
              imdbrating={m.imdbrating}
              imdbvotes={m.imdbvotes}
              title={m.title}
              year={m.year}
              rated={m.rated}
              runtime={m.runtime}
              genre={m.genre}
              plot={m.plot}
            />
            <OtherRatings ratings={m.ratings} />
            <Awards awards={m.awards} />
            <MovieActors actors={m.actors} />
          </MovieWrapper>
        </ContentLayout>

        <Footer />
      </BaseLayout>
    </>
  );
}

export default MovieScreen;
