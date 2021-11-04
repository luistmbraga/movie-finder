import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function MovieActors({ actors }: { actors: string }) {

    if (!actors || actors == "" || actors == "N/A"){
        return (<></>)
    }

  return (
    <Grid item container spacing={2} marginTop={10}>
      <Grid item xs={4}>
        <Typography variant="h2">Actors</Typography>
      </Grid>

      <Grid item xs={8} sx={{ marginTop: "5%" }}>
        <Typography variant="h4">{actors.split(",").join(" |")}</Typography>
      </Grid>
    </Grid>
  );
}

export default MovieActors;
