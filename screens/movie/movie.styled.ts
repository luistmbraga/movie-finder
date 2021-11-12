import styled from "@emotion/styled";

export const MovieWrapper = styled.div`
  display: grid;
  margin: 60px 50px 100px 50px;
  grid-template-areas: "poster info" "ratingsheader ratings" "awardsheader awards" "actorsheader actors";
  gap: 100px 50px;
`;
