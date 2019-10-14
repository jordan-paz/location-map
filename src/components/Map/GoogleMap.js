import React from "react";
import GoogleMapReact from "google-map-react";
import { MapSection } from "./styles";
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default ({ children, selectLocation }) => (
  <MapSection onClick={() => selectLocation(null)}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: API_KEY }}
      defaultCenter={{
        lat: 36.7783,
        lng: -119.4179
      }}
      defaultZoom={6}
    >
      {children}
    </GoogleMapReact>
  </MapSection>
);
