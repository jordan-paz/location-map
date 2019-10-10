import React from "react";
import { MapSection } from "./styles";

import { FaMapMarkerAlt } from "react-icons/fa";

import GoogleMapReact from "google-map-react";
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const Marker = () => <FaMapMarkerAlt size={30} />;

export default ({ customers }) => {
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
        {customers.map(customer => (
          <Marker lat={customer.lat} lng={customer.long} />
        ))}
      </GoogleMapReact>
    </MapSection>
  );
};
