import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import auth from "./services/authServices";

import HomePage from "./components/pages/homePageComponent";
import FarmerRegisterForm from "./components/forms/farmerRegisterForm";
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
import Footer from "./components/footerComponent";
import ProjectsPage from "./components/pages/projectsPage";
import InvestorRegForm from "./components/forms/investorSignUpForm";
import investorsTable from "./components/pages/investorsPage";
import LoginPageLinks from "./components/loginComponent";
import InvestorLoginForm from "./components/forms/imvestorLoginComponet";
import FarmersPage from "./components/pages/farmersPageComponent";
import ProjectCreation from "./components/forms/projectCreationForm";
import FarmerDetails from "./components/pages/farmerDetailsPage";
import ApproveFarmer from "./components/pages/approveFarmer";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const currentUser = await auth.getCurrentUser();
      setUser(currentUser);
    };
    getUser();
  }, []);
  console.log(user);
  return (
    <>
      <div className="sides">
        <ToastContainer />
        <NavBar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/logins" component={LoginPageLinks} />
          <Route
            path="/farmers/register/farm"
            component={FarmRegistrationForm}
          />

          {/* Projects  */}
          <Route path="/projects/create" component={ProjectCreation} />
          <Route
            path="/projects"
            render={(props) => <ProjectsPage {...props} user={user} />}
          />

          {/* farmers */}

          <Route path="/farmers/:id/approve" component={ApproveFarmer} />
          <Route exact path="/farmers/login" component={FarmerLoginForm} />
          <Route path="/farmers/register" component={FarmerRegisterForm} />

          <Route exact path="/farmers/:id" component={FarmerDetails} />
          <Route path="/farmers" component={FarmersPage} />

          <Route path="/investors/register" component={InvestorRegForm} />
          <Route path="/investors/login" component={InvestorLoginForm} />
          <Route path="/investors" component={investorsTable} />

          {/* products */}

          <Route exact path="/product/:id" component={ProductDetails} />
          <Route exact path="/products/register" component={ProductForm} />
          <Route exact path="/products" component={ProductPage} />

          {/* Customers down */}

          <Route path="/customer/signup" component={CustomerSignUP} />
          <Route path="/customer/login" component={CustomerLogin} />

          {/* Proffesionals down */}
          <Route path="/professionals/signup" component={ProfessionalRegForm} />
          <Route
            path="/professionals/login"
            component={ProfessionalLoginForm}
          />
          <Route
            exact
            path="/professionals/:id"
            component={ProfessionalDetails}
          />
          <Route exact path="/professionals" component={ProfessionalsTable} />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
