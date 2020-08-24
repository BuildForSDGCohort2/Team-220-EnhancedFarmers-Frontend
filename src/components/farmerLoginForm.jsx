import React from "react";
import Joi from "joi-browser";

import FormInput from "./reUsableComponents/formComponent";

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
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderTextInput("email", "Email", "email")}
          {this.renderTextInput("password", "Password", "password")}
          {this.renderButton("Sign Up")}
        </form>
      </div>
    );
  }
}

export default FarmerLoginForm;
