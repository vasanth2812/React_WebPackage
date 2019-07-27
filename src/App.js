import React from "react";
import { Button } from "reactstrap";
import { Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomePage from "./Modules/HomePage/HomePage";
import LoginPage from "./Modules/LoginPage/LoginPage";

const App = () => (
  <div>
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
  </div>
);

export default App;
