import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import FormInput from "../reUsableComponents/formComponent";
import "./formStyles/centerContent.css";
import { createFarmer } from "../../services/farmers";
import auth from "../../services/authServices";

class FarmerRegisterForm extends FormInput {
  state = {
    data: {
      email: "",
      fname: "",
      lname: "",
      contact: "",
      location: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required(),
    fname: Joi.string().required(),
    lname: Joi.string().required(),
    contact: Joi.string().required(),
    location: Joi.string().required(),
    password: Joi.string().min(6).max(20).required(),
  };

  submit = async () => {
    try {
      const response = await createFarmer(this.state.data, this.state.image);
      auth.loginWithJwt(response.headers["x-access-token"]);
      window.location = "/projects";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const returnErrors = ex.response.data.message;
        this.setState({ errors: returnErrors });
        toast.info(this.state.errors);
      }
    }
  };

  render() {
    return (
      <>
        <div className="container bg-light">
          <div className="card style">
            <div className="card-body">
              <h5 className="card-title btn btn-primary">Step One</h5>
              <p className="card-text">
                Provide us with the inintial information about your project e.g farm
                give us your contact.
              </p>
            </div>
          </div>

          <div className="card style">
            <div className="card-body">
              <h5 className="card-title btn btn-primary">Step Two</h5>
              <p className="card-text">
                Our professionals will contact you For the details about your
                projects and assessment will be done on your project
              </p>
              {/* <Link to="/professionals/login" className="btn btn-primary">Login</Link> */}
            </div>
          </div>

          <div className="card style">
            <div className="card-body">
              <h5 className="card-title btn btn-primary">Step Three</h5>
              <p className="card-text">
                A report of the requirement for the project is done and Arragement
                for the sourcing is done.
                Discussion is done about the requirements by the professionals,investors
                and farmer your self.
              </p>
              {/* <Link to="/professionals/login" className="btn btn-primary">Login</Link> */}
            </div>
          </div>

          <div className="card style">
            <div className="card-body">
              <h5 className="card-title btn btn-primary">Step Four</h5>
              <p className="card-text">
                1. Get Aprroved And Projects registetered
              </p>
              <p className="card-text">
                2.
                <span className="badge badge-pill badge-secondary">Congurations</span>
                <br />
                Upon becoming Part of excelling Farmers
              </p>
              {/* <Link to="/professionals/login" className="btn btn-primary">Login</Link> */}
            </div>
          </div>

          <div className="content">
            <h2> NOW SIGN UP HERE TO CONTINUE </h2>
            <form onSubmit={this.handleSubmit}>
              {this.renderTextInput("email", "Email", "email")}
              {this.renderTextInput("fname", "First Name")}
              {this.renderTextInput("lname", "Last Name")}
              {this.renderTextInput("contact", "Contact")}
              {this.renderTextInput("location", "Location")}
              {this.renderTextInput("password", "Password", "password")}
              {this.renderFileInput()}
              {this.renderButton("Sign Up")}
            </form>
          </div>

        </div>

      </>
    );
  }
}

export default FarmerRegisterForm;
