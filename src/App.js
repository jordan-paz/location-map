import React from "react";
import Layout from "./components/Layout";

import Map from "./components/Map";
import Search from "./components/Search";
import LocationList from "./components/LocationList";

export default () => (
  <Layout>
    <LocationList />
    <Map />
    <Search />
  </Layout>
);
