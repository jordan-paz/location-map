import React, { useEffect, useState } from "react";
import axios from "axios";

import Layout from "./components/Layout";
import Map from "./components/Map";
import Search from "./components/Search";
import LocationList from "./components/LocationList";

export default () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomers = async () => {
      const response = await axios.get("http://localhost:9000");
      setCustomers(response.data);
    };
    getCustomers();
  }, []);
  return (
    <Layout>
      <LocationList customers={customers} />
      <Map customers={customers} />
      <Search />
    </Layout>
  );
};
