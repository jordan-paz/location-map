import React from "react";
import Marker from "./Marker";
import DetailModal from "./DetailModal";

export default ({ location, selectLocation, showModal }) => {
  return (
    <>
      <Marker onClick={() => selectLocation(location)} />
      <DetailModal location={location} show={showModal} />
    </>
  );
};
