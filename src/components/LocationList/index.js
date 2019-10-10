import React from "react";
import ListItem from "./ListItem";
import { ListSection, List } from "./styles";

export default ({ customers }) => {
  return (
    <ListSection>
      <List>
        {customers.map(customer => (
          <ListItem customer={customer} key={customer.id} />
        ))}
      </List>
    </ListSection>
  );
};
