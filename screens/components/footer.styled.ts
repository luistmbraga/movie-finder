import styled from "@emotion/styled";

export const BaseFooter = styled.footer`
  grid-area: bottom;
  width: 100%;
  height: 100px;
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`;

export const FooterSpan = styled.span`
  height: 1em;
  margin-left: 0.5rem;
  font-weight: bold;
`;
