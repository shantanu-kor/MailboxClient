import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

import AuthProvider from "./store/AuthProvider";
import { BrowserRouter } from "react-router-dom";
// import InboxProvider from "./store/InboxProvider";
// import SentProvider from "./store/SentProvider";

import { Provider } from "react-redux";
import store from "./store/Index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </BrowserRouter>
);
