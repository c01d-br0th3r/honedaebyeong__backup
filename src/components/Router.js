import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../routes/Main";
import QnA from "../routes/QnA";
import RegisterForm from "./RegistForm";
import Contact from "./Contact";
import Intro from "../routes/Intro";
import UserInfo from "../routes/UserInfo";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Intro} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/about" component={QnA} />
      <Route exact path="/register" component={RegisterForm} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/user/:id" component={UserInfo} />
    </Switch>
  </Router>
);
