import styled from "styled-components";

export const ListSection = styled.section`
  grid-area: list;
  width: 100%;
  overflow-x: hidden;
  overflow-x: auto;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: row;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: row;
  }
`;

export const Card = styled.li`
  padding: 10px;
  border: 1px solid black;
  border-radius: 2px;
  margin: 10px;
  width: 80%;
  height: 120px;
  @media (max-width: 700px) {
    width: 200px;
  }
`;

export const CardTitle = styled.h3`
  margin: 0;
`;

export const CardDetails = styled.ul`
  list-style-type: none;
  padding: 0;
`;
