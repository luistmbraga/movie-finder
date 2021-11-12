import styled from "@emotion/styled";

export const MovieInfoWrapper = styled.div`
  display: flex;
  grid-template-areas: "left right";
  gap: 50px;
`;

export const MovieInfoCard = styled.div`
  display: grid;
  grid-area: info;
  max-width: 700px;
`;

export const MovieTitle = styled.p`
  font-size: 52px;
  margin: 0;
`;

export const InfoList = styled.ul`
  display: flex;
  list-style-type: none;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;
