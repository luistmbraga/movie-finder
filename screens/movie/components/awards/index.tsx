import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Awards({ awards }: { awards: string }) {
    if (!awards || awards == "" || awards == "N/A"){
        return (<></>)
    }

  return (
    <Grid item container spacing={2} marginTop={10}>
      <Grid item xs={4}>
        <Typography variant="h2">Awards</Typography>
      </Grid>

      <Grid item xs={8} sx={{ marginTop: "5%" }}>
        <Typography variant="h4">{awards}</Typography>
      </Grid>
    </Grid>
  );
}

export default Awards;
