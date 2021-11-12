import styled from "@emotion/styled";

export const ActorsHeader = styled.div`
  grid-area: actorsheader;
`;

export const ActorsHeaderText = styled.p`
  font-size: 50px;
  margin: 0;
`;

export const ActorsList = styled.ul`
  display: grid;
  gap: 20px;
  list-style-type: none;
  padding: 0;
  grid-area: actors;
`;

export const ActorsItem = styled.li`
  font-size: 20px;
`;
