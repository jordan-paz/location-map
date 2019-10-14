import React, { useEffect } from "react";

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
        selectedLocation={locationStore.selectedLocation}
        selectLocation={locationStore.selectLocation}
      />
      <Search />
    </Layout>
  );
});
