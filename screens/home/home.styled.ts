import styled from "@emotion/styled";

export const InputSearch = styled.input`
  border: 2px solid black;
  border-radius: 4px;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  background-color: white;
  background-image: url("https://www.w3schools.com/css/searchicon.png");
  background-position: 10px 10px;
  background-repeat: no-repeat;
`;

export const InputSearchWrapper = styled.div`
  text-align: center;
  padding: 50px 0;
  grid-area: search;
`;

export const HomeWrapper = styled.div`
  height: 100%;
  display: grid;
  align-items: start;
  grid-template-areas: "search" "results" "pagination";
  gap: 50px;
`;
