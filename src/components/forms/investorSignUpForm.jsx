import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import FormInput from "../reUsableComponents/formComponent";
import { createInvestor } from "../../services/investor";
// import { createAProfessional } from "../../services/professionals";

import auth from "../../services/authServices";

import "./formStyles/centerContent.css";

class InvestorRegForm extends FormInput {
  state = {
    data: {
      email: "",
      company_name: "",
      contact: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    company_name: Joi.string().required().label("FirstName"),
    contact: Joi.string().required().label("Contact"),
    password: Joi.string().required().label("Password"),
  };

  submit = async () => {
    try {
      const response = await createInvestor(this.state.data, this.state.image);
      auth.loginWithJwt(response.headers["x-access-token"]);
      window.location = "/projects";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const returnErrors = ex.response.data.message;
        this.setState({ errors: returnErrors });
        toast.error(this.state.errors);
      }
    }
  };

  render() {
    return (
      <div className="content">
        <h2> Please register Investor here</h2>
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          {this.renderTextInput("email", "Email", "email")}
          {this.renderTextInput("company_name", "Company Name")}
          {this.renderTextInput("contact", "Contact")}
          {this.renderTextInput("password", "Password", "password")}
          {this.renderFileInput()}
          {this.renderButton("Sign Up")}
        </form>
      </div>
    );
  }
}

export default InvestorRegForm;
