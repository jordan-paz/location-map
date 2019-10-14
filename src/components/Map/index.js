import React from "react";
import GoogleMap from "./GoogleMap";
import Location from "./Location";

export default ({ locations, selectedLocation, selectLocation }) => {
  return (
    <GoogleMap>
      {locations.map(location => (
        <Location
          location={location}
          lat={location.lat}
          lng={location.long}
          showModal={
            selectedLocation && selectedLocation.id === location.id
              ? true
              : false
          }
          selectedLocation={selectedLocation}
          selectLocation={selectLocation}
        />
      ))}
    </GoogleMap>
  );
};
