import React from "react";
import Joi from "joi-browser";

import FormInput from "../reUsableComponents/formComponent";

class ProfessionalRegForm extends FormInput {
  state = {
    data: {
      email: "",
      fname: "",
      lname: "",
      contact: "",
      residence: "",
      profession: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required(),
    fname: Joi.string().required(),
    lname: Joi.string().required(),
    contact: Joi.string().required(),
    residence: Joi.string().required(),
    profession: Joi.string().required(),
    password: Joi.string().min(6).max(20).required(),
  };

  submit = () => {
    const { state } = this.props.location;
    window.location = state ? state.from.pathname : "/";
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderTextInput("email", "Email", "email")}
          {this.renderTextInput("fname", "FirstName")}
          {this.renderTextInput("lname", "LastName")}
          {this.renderTextInput("contact", "Contact")}
          {this.renderTextInput("residence", "Residence")}
          {this.renderTextInput("profession", "Profession")}
          {this.renderTextInput("password", "Password", "password")}
          {this.renderButton("Sign Up")}
        </form>
      </div>
    );
  }
}

export default ProfessionalRegForm;
