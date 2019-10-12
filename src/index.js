import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LocationStore from "./locationStore";

ReactDOM.render(
  <App locationStore={new LocationStore()} />,
  document.getElementById("root")
);
