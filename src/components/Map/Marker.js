import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MarkerWrapper } from "./styles";

export default ({ onClick }) => (
  <MarkerWrapper onClick={onClick}>
    <FaMapMarkerAlt size={30} />
  </MarkerWrapper>
);
