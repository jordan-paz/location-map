import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import LocationStore from "./locationStore";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider locationStore={new LocationStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
