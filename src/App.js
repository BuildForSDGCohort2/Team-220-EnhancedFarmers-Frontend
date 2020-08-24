import React from "react";
import { Route, Switch } from "react-router-dom";

import FarmerRegisterForm from "./components/farmerRegisterFprm";
import HomePage from "./components/pages/homePageComponent";
import FarmerLoginForm from "./components/farmerLoginForm";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="sides">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/farmers/register" component={FarmerRegisterForm} />
          <Route path="/farmers/login" component={FarmerLoginForm} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
