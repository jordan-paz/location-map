import React from "react";
import { Card, CardDetails, CardTitle } from "./styles";

export default ({ customer }) => {
  const { name, nickname, website, address, phone } = customer;

  return (
    <Card>
      <CardTitle>{nickname ? nickname : name}</CardTitle>
      <CardDetails>
        <li>
          <a url={website}>Website</a>
        </li>
        <li>{address}</li>
        <li>{phone}</li>
      </CardDetails>
    </Card>
  );
};
