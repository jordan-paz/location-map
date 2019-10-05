import styled from "styled-components";

export const MainGrid = styled.div`
  display: grid;
  grid-template-areas:
    "search"
    "map"
    "list";
  @media (min-width: 600px) {
    grid-template-columns: 1fr 2fr;
    grid-template-areas:
      "search map"
      "list map";
  }
`;

export const MapSection = styled.section`
  grid-area: map;
  width: 100%;
  height: 100%;
`;

export const ListSection = styled.section`
  grid-area: list;
  background-color: blue;
`;
export const SearchSection = styled.section`
  grid-area: search;
  background-color: purple;
`;
