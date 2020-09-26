import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import FormInput from "../reUsableComponents/formComponent";
import { loginFarmer } from "../../services/authServices";

import "./formStyles/centerContent.css";

class FarmerLoginForm extends FormInput {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(20).required(),
  };

  submit = async () => {
    const { email, password } = this.state.data;
    try {
      await loginFarmer(email, password);
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
        <h3>Please Login as a farmer here</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderTextInput("email", "Email", "email")}
          {this.renderTextInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default FarmerLoginForm;
