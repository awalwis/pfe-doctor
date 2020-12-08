import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import NewDoctor from "../components/NewDoctor";
export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/subscribe_doctor" exact component={NewDoctor} />
    </Switch>
  </Router>
);
