import React from "react";
import ReactDOM from "react-dom";
import "assets/css/index.css";
import App from "views/App";
import Test from "test/Test";
import * as serviceWorker from "test/serviceWorker";
//Css files

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" render={(props) => <App {...props} />} />
      <Route path="/test" render={(props) => <Test {...props} />} />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
