import React from "react";
import GoogleMapReact from "google-map-react";

export default () => {
  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDcBkSoj5LrQfy8Gk6aHZYkEkxeD0bBJTk" }}
        defaultCenter={{
          lat: 59.95,
          lng: 30.33
        }}
        defaultZoom={11}
      ></GoogleMapReact>
    </div>
  );
};
