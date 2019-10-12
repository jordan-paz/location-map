import styled from "styled-components";

export const MainGrid = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 1100px;
  padding: 10px 10px 100px 10px;
  grid-row-gap: 15px;
  grid-template-areas:
    "search"
    "map"
    "list";
  @media (min-width: 700px) {
    padding: 30px;
    height: 70vh;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 10% 90%;
    grid-template-areas:
      "search search"
      "list map";
  }
`;
