import React from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import Product from "./views/Product";
import Cart from "./views/Cart";
import MyNavbar from "./components/MyNavbar";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MyNavbar />
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route
          path="/product/:id"
          component={Product}
        />
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
