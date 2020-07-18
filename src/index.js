import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import "./styles/main.css";
import "react-datepicker/dist/react-datepicker.css";

import Dashboard from "./component/Dashboard";
import reducer from "./reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById("root")
);
