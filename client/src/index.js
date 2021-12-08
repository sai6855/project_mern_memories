import React from "react";
import ReactDOM from "react-dom";

import { StoreProvider } from "react-manage-state";

import App from "./App";
import "./index.css";

const state = {
  posts: [],
  currentId: 0,
};

ReactDOM.render(
  <StoreProvider defaultStore={state}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
