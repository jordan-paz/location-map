import React from "react";
import GoogleMapReact from "google-map-react";
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default () => {
  console.log(API_KEY);
  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={{
          lat: 59.95,
          lng: 30.33
        }}
        defaultZoom={11}
      ></GoogleMapReact>
    </div>
  );
};
