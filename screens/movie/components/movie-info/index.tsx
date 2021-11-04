import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Movie } from "../../domain/entities/movie";

function MovieInfo({
  poster,
  imdbrating,
  imdbvotes,
  title,
  year,
  rated,
  runtime,
  genre,
  plot,
}: {
  poster: string;
  imdbrating: string;
  imdbvotes: string;
  title: string;
  year: string;
  rated: string;
  runtime: string;
  genre: string;
  plot: string;
}) {
  return (
    <Grid item container spacing={2}>
      <Grid item xs={4}>
        <Card
          sx={{
            maxWidth: 345,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            alt="poster"
            image={poster == "N/A" ? "/default-movie.jpeg" : poster}
          />
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {imdbrating == "N/A" ? "0" : imdbrating}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                /10 IMDb
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {imdbvotes == "N/A" ? "0" : imdbvotes} Votes
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={8} sx={{ marginTop: "10%" }} container>
        <Typography gutterBottom variant="h3" component="div">
          {`${title} (${year})`}
        </Typography>
        <Card sx={{ minWidth: 275, marginLeft: "25%" }} elevation={0}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1.5,
              }}
            >
              <Typography color="text.secondary" variant="subtitle2">
                {rated == "N/A" ? '' : rated}
              </Typography>
              <Typography
                color="text.secondary"
                variant="subtitle2"
                marginLeft={2}
              >
                {runtime == "N/A" ? '' : runtime}
              </Typography>
              <Typography
                color="text.secondary"
                variant="subtitle2"
                marginLeft={2}
              >
                {genre == "N/A" ? '' : genre}
              </Typography>
            </Box>

            <Typography variant="body2">{plot == "N/A" ? '' : plot}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default MovieInfo;
