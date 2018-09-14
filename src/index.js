import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import middleware from "./middleware";
import App from "./components/App.jsx";

const store = createStore(reducer, middleware);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
