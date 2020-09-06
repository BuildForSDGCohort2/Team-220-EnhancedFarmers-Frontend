import React from "react";
import Joi from "joi-browser";

import FormInput from "../reUsableComponents/formComponent";

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

  submit = () => {
    const { state } = this.props.location;
    window.location = state ? state.from.pathname : "/";
  };

  render() {
    return (
      <div className="content">
        <h3>Please Login here</h3>
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
