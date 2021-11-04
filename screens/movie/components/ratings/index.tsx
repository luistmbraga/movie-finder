import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Ratings, Rating } from "../../domain/entities/movie";

function OtherRatings({ ratings }: { ratings: Ratings }) {
  if (!ratings || ratings.length == 0) {
    return <></>;
  }

  return (
    <Grid item container spacing={2} marginTop={10}>
      <Grid item xs={4}>
        <Typography variant="h2">Ratings</Typography>
      </Grid>

      <Grid item xs={8} sx={{ marginTop: "5%" }}>
        {ratings.map((item: Rating, index: number) => {
          return (
            <Typography key={index} variant="h4" marginBottom={2}>
              {item.source} {'  '} {item.value}
            </Typography>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default OtherRatings;
