import App from "router/App";
import "index.css";
import { Provider } from "react-redux";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import store from "utils/reducers/Store";

ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <App />
    </Fragment>
  </Provider>,
  document.getElementById("root")
);
