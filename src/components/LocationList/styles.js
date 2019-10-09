import styled from "styled-components";

export const ListSection = styled.section`
  grid-area: list;
  overflow-x: hidden;
  overflow-x: auto;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: row;
  }
`;

export const List = styled.ul`
  @media (max-width: 700px) {
    display: flex;
    flex-direction: row;
  }
`;
