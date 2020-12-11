import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <div className="inner__root">
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </div>,
  document.getElementById("root")
);
