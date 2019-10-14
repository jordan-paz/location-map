import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MarkerWrapper } from "./styles";
import DetailModal from "./DetailModal";

export default ({ location, selectedLocation, selectLocation }) => (
  <MarkerWrapper>
    <FaMapMarkerAlt size={30} onClick={() => selectLocation(location)} />
    <DetailModal
      location={location}
      show={
        selectedLocation && selectedLocation.id === location.id ? true : false
      }
    />
  </MarkerWrapper>
);
