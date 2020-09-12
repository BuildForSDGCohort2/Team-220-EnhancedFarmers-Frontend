import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import HomePage from "./components/pages/homePageComponent";
import FarmerRegisterForm from "./components/forms/farmerRegisterFprm";
import FarmerLoginForm from "./components/forms/farmerLoginForm";
import ProductForm from "./components/forms/productRegisterForm";
import CustomerSignUP from "./components/forms/customerRegisterFormComponent";
import CustomerLogin from "./components/forms/customerLoginComponet";
import ProfessionalRegForm from "./components/forms/profetionalRegComponent";
import ProfessionalLoginForm from "./components/forms/profectionLoginForm";
import ProductPage from "./components/pages/productsPageComponent";
import FarmRegistrationForm from "./components/forms/farmRegistrationForm";
import NavBar from "./components/navBarCOmponent";
import ProductDetails from "./components/pages/productDetailsPage";
import ProfessionalDetails from "./components/pages/professionalDetails";
import ProfessionalsTable from "./components/pages/professionalsDisplayPage";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="sides">
        <ToastContainer />
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/farmers/register/farm"
            component={FarmRegistrationForm}
          />
          <Route path="/farmers/register" component={FarmerRegisterForm} />
          <Route path="/farmers/login" component={FarmerLoginForm} />
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route exact path="/products/register" component={ProductForm} />
          <Route exact path="/products" component={ProductPage} />
          <Route path="/customer/signup" component={CustomerSignUP} />
          <Route path="/customer/login" component={CustomerLogin} />
          <Route exact path="/professional/:id" component={ProfessionalDetails} />
          <Route exact path="/professionals" component={ProfessionalsTable} />
          <Route exact path="/professionals/signup" component={ProfessionalRegForm} />
          <Route path="professionals/login" component={ProfessionalLoginForm} />
        </Switch>
      </div>
    </>
  );
}

export default App;
