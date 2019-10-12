import React from "react";
import ListItem from "./ListItem";
import { ListSection, List } from "./styles";

export default ({ locations }) => {
  console.log(locations);
  return (
    <ListSection>
      <List>
        {locations.map(location => (
          <ListItem location={location} key={location.id} />
        ))}
      </List>
    </ListSection>
  );
};
