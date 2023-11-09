import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./app/store";

ReactDOM.render(
  <Router>
    {/* Wrapping the entire app around the provider allows everything to use the store */}
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
