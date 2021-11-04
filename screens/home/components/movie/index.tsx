import { MovieSearchResult } from "../../domain/entities/movie-result";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function MovieResult({ movie }: { movie: MovieSearchResult }) {
  return (
    <a
      href={"http://localhost:3000/movie?id=" + movie.imdbid}
      style={{ width: "500" }}
    >
      <Card sx={{ display: "flex" }} elevation={6}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {movie.title}
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 1,
              pb: 1,
            }}
          >
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {movie.year}
            </Typography>
          </Box>
        </Box>
        <CardMedia
        style={{flex: 1, flexDirection: "column", alignItems: 'flex-end'}}
          component="img"
          sx={{ width: 190 }}
          image={movie.poster == "N/A" ? "/default-movie.jpeg" : movie.poster}
          alt="poster"
        />
      </Card>
    </a>
  );
}

export default MovieResult;
