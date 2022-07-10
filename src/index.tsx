import React from "react";

// eslint-disable-next-line import/order
import ReactDOM from "react-dom";

import "./index.css";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import App from "./App";
import { store } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
