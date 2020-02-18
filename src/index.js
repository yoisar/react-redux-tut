import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./app/container/App";
import store from "./app/store";
const root = "root";
render(
  <Provider store={store}>
    <App />
  </Provider>,
  window.document.getElementById(root)
);
