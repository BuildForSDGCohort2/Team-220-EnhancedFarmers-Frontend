import React from "react";
import { toast } from "react-toastify";
import Joi from "joi-browser";

import FormInput from "../reUsableComponents/formComponent";
import { changePassword } from "../../services/customers";
import auth from "../../services/authServices";

class ChangePassword extends FormInput {
  state = {
    data: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required(),
  };

  submit = async () => {
    try {
      const response = await changePassword(this.state.data);
      auth.loginWithJwt(response.headers["x-access-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response) {
        const returnErrors = ex.response.data.message;
        this.setState({ errors: returnErrors });
        toast.error(this.state.errors);
      }
    }
  };

  render() {
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit}>
          {this.renderTextInput("email", "Your Email", "email")}
          {this.renderTextInput("password", "New Password", "password")}
          {this.renderTextInput(
            "confirmPassword",
            "Confirm Password",
            "password"
          )}
          {this.renderButton("Change Pasword")}
        </form>
      </div>
    );
  }
}

export default ChangePassword;
