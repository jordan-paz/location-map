import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MarkerWrapper } from "./styles";

export default ({ onClick }) => (
  <MarkerWrapper>
    <FaMapMarkerAlt size={30} onClick={onClick} />
  </MarkerWrapper>
);
