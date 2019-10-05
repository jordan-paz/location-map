import React from "react";
import ListSection from "./ListSection";
import MapSection from "./MapSection";
import { MainGrid } from "./styles";
import SearchSection from "./SearchSection";

export default () => (
  <MainGrid>
    <ListSection />
    <MapSection />
    <SearchSection />
  </MainGrid>
);
