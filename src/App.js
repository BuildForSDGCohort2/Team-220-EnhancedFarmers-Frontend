import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/pages/homePageComponent";
import FarmerRegisterForm from "./components/forms/farmerRegisterFprm";
import FarmerLoginForm from "./components/forms/farmerLoginForm";
import ProductForm from "./components/forms/productRegisterForm";
import CustomerSignUP from "./components/forms/customerRegisterFormComponent";
import CustomerLogin from "./components/forms/customerLoginComponet";
import ProfessionalRegForm from "./components/forms/profetionalRegComponent";
import ProfessionalLoginForm from "./components/forms/profectionLoginForm";
import ProductPage from "./components/pages/productsPageComponent";

import "./App.css";

function App() {
  return (
    <>
      <div className="sides">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/farmers/register" component={FarmerRegisterForm} />
          <Route path="/farmers/login" component={FarmerLoginForm} />
          <Route path="/products" component={ProductPage} />
          <Route path="/products/register" component={ProductForm} />
          <Route path="/customer/signup" component={CustomerSignUP} />
          <Route path="/customer/login" component={CustomerLogin} />
          <Route path="/professional/signup" component={ProfessionalRegForm} />
          <Route path="professional/login" component={ProfessionalLoginForm} />
        </Switch>
      </div>
    </>
  );
}

export default App;
