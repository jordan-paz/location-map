import React from "react";

export default ({ locationDetails }) => {
  const { name, url, address, phone } = locationDetails;

  return (
    <li>
      <h3>{name}</h3>
      <ul>
        <li>{url}</li>
        <li>{address}</li>
        <li>{phone}</li>
      </ul>
    </li>
  );
};
