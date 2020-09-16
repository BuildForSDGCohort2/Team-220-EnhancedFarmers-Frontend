import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import FormInput from "../reUsableComponents/formComponent";
import { loginInvestors } from "../../services/authServices";

import "./formStyles/centerContent.css";

class InvestorLoginForm extends FormInput {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  };

  submit = async () => {
    const { email, password } = this.state.data;
    try {
      await loginInvestors(email, password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/projects";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const returnedErrors = ex.response.data.message;
        this.setState({ errors: returnedErrors });
        toast.info(this.state.errors);
      }
    }
  };

  render() {
    return (
      <div className="content">
        <h3>Please Login here</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderTextInput("email", "Email", "Please Your Email here", "email")}
          {this.renderTextInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default InvestorLoginForm;
