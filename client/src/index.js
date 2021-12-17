import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./pages/login";
import TransactionSuccess from "./pages/transaction_success";
import "./css/index.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/transaction/success">
          <TransactionSuccess />
        </Route>
        <Route path="/auth/login">
          <Login />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
