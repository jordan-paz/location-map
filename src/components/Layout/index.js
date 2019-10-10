import React from "react";
import { MainGrid } from "./styles";
import Header from "../Header";

export default ({ children }) => (
  <>
    <Header />
    <MainGrid>{children}</MainGrid>
  </>
);
