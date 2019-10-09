import React, { useEffect, useState } from "react";
import axios from "axios";
import ListItem from "./ListItem";
import { ListSection, List } from "./styles";

export default () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCustomers = async () => {
      const response = await axios.get("http://localhost:9000");
      setCustomers(response.data);
    };
    getCustomers();
    setLoading(false);
  }, []);

  return (
    <ListSection>
      <List>
        {!loading &&
          customers.map(customer => (
            <ListItem
              name={customer.name}
              phone={customer.phone}
              key={customer.name}
            />
          ))}
      </List>
    </ListSection>
  );
};
