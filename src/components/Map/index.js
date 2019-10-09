import React from "react";
import { MapSection } from "./styles";
import GoogleMapReact from "google-map-react";
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default () => {
  return (
    <MapSection>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={{
          lat: 79.95,
          lng: 30.33
        }}
        defaultZoom={11}
      ></GoogleMapReact>
    </MapSection>
  );
};
