import { useRouter } from "next/dist/client/router";
import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Head from "../components/head";
import styles from "../../styles/Home.module.css";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { getMovie } from "./domain/use-cases/get-movie";
import MovieInfo from "./components/movie-info/index";
import MovieActors from "./components/movie-actors/index";
import Awards from "./components/awards/index";
import OtherRatings from "./components/ratings/index";

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

  console.log(m)

  return (
    <div>
      <Head title="Movie Finder" />

      <main className={styles.main}>
        <Container>
          <Grid container>
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
            <OtherRatings ratings={m.ratings}/>
            <Awards awards={m.awards}/>
            <MovieActors actors={m.actors}/>
          </Grid>

        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default MovieScreen;
