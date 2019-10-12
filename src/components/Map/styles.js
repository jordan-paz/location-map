import styled from "styled-components";

export const MapSection = styled.section`
  grid-area: map;
  height: 65vh;
  width: 100%;
  @media (min-width: 700px) {
    height: 100%;
  }
`;

export const MarkerWrapper = styled.span`
  :hover {
    cursor: pointer;
  }
`;
