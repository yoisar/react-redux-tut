import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./container/App";

const root = "root";
render(
  <Provider store={store}>
    <App />
  </Provider>,
  window.document.getElementById(root)
);
