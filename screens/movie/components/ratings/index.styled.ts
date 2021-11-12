import styled from "@emotion/styled";

export const RatingsHeader = styled.div`
  grid-area: ratingsheader;
`;

export const RatingsHeaderText = styled.p`
  font-size: 50px;
  margin: 0;
`;

export const RatingsList = styled.ul`
  display: grid;
  gap: 20px;
  list-style-type: none;
  padding: 0;
  grid-area: ratings;
`;

export const RatingsItem = styled.li`
  font-size: 20px;
`;
