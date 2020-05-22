import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../routes/Main";
import Header from "./Header";
import QnA from "../routes/QnA";
import RegisterForm from "./RegistForm";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={QnA} />
      <Route exact path="/register" component={RegisterForm} />
    </Switch>
  </Router>
);
