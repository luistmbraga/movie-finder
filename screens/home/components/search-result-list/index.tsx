import { MovieSearchResult } from "../../domain/entities/movie-result";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MovieCard from "./movie-card";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const lightTheme = createTheme({ palette: { mode: "light" } });

function SearchResults({ movies }: { movies: Array<MovieSearchResult> }) {
  return (
    <Grid
      container
      spacing={2}
      width="100%"
      justifyContent="center"
      alignItems="center"
      direction="column"
      data-testid="search-results"
    >
      <Grid item xs={4}>
        <ThemeProvider theme={lightTheme}>
          <Box
            sx={{
              p: 2,
              bgcolor: "background.default",
              display: "grid",
              gridTemplateColumns: {
                md: "1fr 1fr 1fr",
                xs: "1fr",
                sm: "1fr 1fr",
              },
              gap: 2,
            }}
          >
            {movies.map((item) => (
              <MovieCard
                key={item.imdbid}
                title={item.title}
                year={item.year}
                poster={item.poster}
                imdbid={item.imdbid}
                type={item.type}
              />
            ))}
          </Box>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
}

export default SearchResults;
