import React from "react";
import Script from "react-load-script";
import { StyledInput, SearchSection } from "./styles";

export default () => {
  return (
    <SearchSection>
      <h2>Enter your location</h2>
      <StyledInput type="text" />
    </SearchSection>
  );
};
