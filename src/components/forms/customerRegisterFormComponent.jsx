import React from "react";
import Joi from "joi-browser";

import FormInput from "../reUsableComponents/formComponent";

import "./formStyles/centerContent.css";

class CustomerSignUP extends FormInput {
  state = {
    data: {
      email: "",
      fullName: "",
      contact: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required(),
    fullName: Joi.string().required().label("Your Name"),
    contact: Joi.number().required(),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{6,20}$/)
      .required(),
    location: Joi.string().required(),
  };

  submit = () => {
    const { state } = this.props.location;
    window.location = state ? state.from.pathname : "/";
  };

  render() {
    return (
      <div className="center">
        <form onSubmit={this.handleSubmit}>
          {this.renderTextInput("email", "Email")}
          {this.renderTextInput("fullName", "FullName")}
          {this.renderTextInput("contact", "Contact", "number")}
          {this.renderTextInput("password", "Password", "passord")}
          {this.renderButton("Sign Up")}
        </form>
      </div>
    );
  }
}

export default CustomerSignUP;
