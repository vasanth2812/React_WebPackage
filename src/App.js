import React from "react";
import { Button } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Component/Header/Header";
import HomePage from "./Modules/HomePage";
import LoginPage from "./Modules/LoginPage";
import NotFound from "./Modules/NotFound";
import "./global/global.scss";

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="*" exact component={NotFound} />
    </Switch>
  </div>
);

export default App;
