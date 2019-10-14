import React from "react";
import { MapSection } from "./styles";
import Marker from "./Marker";

import GoogleMapReact from "google-map-react";
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default ({ locations }) => {
  return (
    <MapSection>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={{
          lat: 36.7783,
          lng: -119.4179
        }}
        defaultZoom={6}
      >
        {locations.map(location => (
          <Marker location={location} lat={location.lat} lng={location.long} />
        ))}
      </GoogleMapReact>
    </MapSection>
  );
};
