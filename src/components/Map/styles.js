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

export const Modal = styled.div`
  padding: 10px;
  border: 1px solid black;
  border-radius: 2px;
  margin: 10px;
  width: 200px;
  height: 100px;
  background-color: white;
  flex-direction: column;
  display: ${props => (props.show ? "flex" : "none")};
`;

export const ModalTitle = styled.h3`
  margin: 0;
`;

export const ModalDetails = styled.ul`
  list-style-type: none;
  padding: 0;
`;
