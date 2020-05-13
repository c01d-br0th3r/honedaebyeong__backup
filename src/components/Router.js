import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../routes/Main";
import Header from "./Header";
import QnA from "../routes/QnA";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/qna" component={QnA} />
    </Switch>
  </Router>
);
