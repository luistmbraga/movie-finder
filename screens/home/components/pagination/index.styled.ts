import styled from "@emotion/styled";

export const PaginationItem = styled.a<{
  active?: boolean;
  hoverable?: boolean;
}>`
  ${({ active }) => `
  cursor: pointer;
  color: black;
  margin: 5px 5px;
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 50%;
  width: 35px;
  &:hover {
    background-color: #d6d6d6;
}
   
  ${
    active &&
    `
    background-color: #9c9c9c;
  `
  }

  `}
`;

export const Dots = styled.a`s
  color: black;
  margin: 5px 5px;
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 50%;
  width: 35px;
`;

export const PaginationWrapper = styled.div`
  text-align: center;
  margin: 50px 0 100px 0;
  grid-area: "pagination";
`;
