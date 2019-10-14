import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MarkerWrapper } from "./styles";

export default ({ location }) => (
  <MarkerWrapper>
    <FaMapMarkerAlt size={30} onClick={() => alert(location.name)} />
  </MarkerWrapper>
);
