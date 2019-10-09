import styled from "styled-components";

export const MainGrid = styled.div`
  display: grid;
  padding: 10px;
  grid-row-gap: 15px;
  grid-template-areas:
    "search"
    "map"
    "list";
  @media (min-width: 700px) {
    height: 90vh;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 20% 80%;
    grid-template-areas:
      "search map"
      "list map";
  }
`;
