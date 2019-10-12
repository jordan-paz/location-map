import React from "react";
import Script from "react-load-script";
import { StyledInput, SearchSection, StylesTitle } from "./styles";

export default () => {
  return (
    <SearchSection>
      <StylesTitle>Find stores near:</StylesTitle>
      <StyledInput type="text" />
    </SearchSection>
  );
};
