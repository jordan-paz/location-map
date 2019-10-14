import React, { useEffect, useState } from "react";
import axios from "axios";

import Layout from "./components/Layout";
import Map from "./components/Map";
import Search from "./components/Search";
import LocationList from "./components/LocationList";
import { observer } from "mobx-react";

export default observer(({ locationStore }) => {
  useEffect(() => {
    locationStore.getLocations();
  }, []);

  return (
    <Layout>
      <LocationList locations={locationStore.locations} />
      <Map
        locations={locationStore.locations}
        selectLocation={locationStore.selectLocation}
      />
      <Search />
    </Layout>
  );
});
