/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-confusing-arrow */
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
import LogOut from "./components/logoutComponet";
import ChangePassword from "./components/forms/updateCustomerPassword";
import CustomerTable from "./components/pages/customersPage";
import CustomerDetails from "./components/pages/customerProfilePage";
import ImageUpdate from "./components/forms/updateCustomerImage";
import PendingOrdersTable from "./components/pages/pendingOrdersPage";
import AllOrders from "./components/pages/allOrdersPage";
import UpdateOfferedPrice from "./components/pages/priceUpdatePage";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import UpdateStatus from "./components/pages/updateStatusPage";
import ProductCategories from "./components/pages/productCategories";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const currentUser = await auth.getCurrentUser();
      setUser(currentUser);
    };
    getUser();
  }, []);
  // console.log(user);
  return (
    <>
      <div className="sides">
        <ToastContainer />
        <NavBar user={user} />

        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route path="/logout" component={LogOut} />
          <Route path="/logins" component={LoginPageLinks} />

          {/* Projects  */}
          <Route path="/projects/create" component={ProjectCreation} />
          <Route
            exact
            path="/projects"
            render={(props) => <ProjectsPage {...props} user={user} />}
          />

          {/* farmers */}

          <Route path="/farmers/:id/approve" component={ApproveFarmer} />
          <Route exact path="/farmers/login" component={FarmerLoginForm} />
          <Route path="/farmers/register" component={FarmerRegisterForm} />

          <Route exact path="/farmers/:id" component={FarmerDetails} />
          <Route
            path="/farmers"
            render={(props) => <FarmersPage {...props} user={user} />}
          />

          <Route path="/investors/register" component={InvestorRegForm} />
          <Route path="/investors/login" component={InvestorLoginForm} />
          <Route path="/investors" component={investorsTable} />

          {/* products */}

          <Route exact path="/products/register" component={ProductForm} />
          <Route
            exact
            path="/products/:id"
            render={(props) => <ProductDetails {...props} user={user} />}
          />
          <Route
            path="/categories"
            render={(props) => <ProductCategories {...props} user={user} />}
          />

          <Route
            path="/products"
            render={(props) => <ProductPage {...props} user={user} />}
          />

          {/* Customers down */}

          <Route path="/customer/signup" component={CustomerSignUP} />
          <Route path="/customer/login" component={CustomerLogin} />
          <Route path="/customer/image" component={ImageUpdate} />
          <Route path="/customer/change/password" component={ChangePassword} />
          <Route path="/customer/:id" component={CustomerDetails} />
          <Route exact path="/customers" component={CustomerTable} />

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

          {/* orders */}
          <Route
            path="/order/change_bid_price/:id"
            component={UpdateOfferedPrice}
          />
          <Route path="/order/change/status/:id" component={UpdateStatus} />
          <Route path="/order/pending" component={PendingOrdersTable} />

          <Route path="/orders" component={AllOrders} />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
