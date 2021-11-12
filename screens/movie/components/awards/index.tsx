import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { AwardsHeader, AwardsHeaderText, AwardsText } from "./index.styled";

function Awards({ awards }: { awards: string }) {
  if (!awards || awards == "" || awards == "N/A") {
    return <></>;
  }

  return (
    <>
      <AwardsHeader data-testid="awards-header">
        <AwardsHeaderText>Awards</AwardsHeaderText>
      </AwardsHeader>
      <AwardsText>{awards}</AwardsText>
    </>
  );
}

export default Awards;
