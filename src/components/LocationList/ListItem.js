import React from "react";
import { Card, CardDetails, CardTitle } from "./styles";

export default ({ location }) => {
  const { name, nickname, website, address, phone } = location;

  return (
    <Card>
      <CardTitle>{nickname ? nickname : name}</CardTitle>
      <CardDetails>
        <li>
          <a href={website}>Website</a>
        </li>
        <li>{address}</li>
        <li>{phone}</li>
      </CardDetails>
    </Card>
  );
};
