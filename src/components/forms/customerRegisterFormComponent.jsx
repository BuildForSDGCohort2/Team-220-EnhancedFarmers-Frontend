import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import FormInput from "../reUsableComponents/formComponent";
import { customerSignup } from "../../services/customers";
import auth from "../../services/authServices";

import "./formStyles/centerContent.css";

class CustomerSignUP extends FormInput {
  state = {
    data: {
      email: "",
      username: "",
      contact: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required(),
    username: Joi.string().required().label("Your Name"),
    contact: Joi.string().required(),
    password: Joi.string().min(6).max(20).alphanum().required(),
  };

  submit = async () => {
    try {
      const response = await customerSignup(this.state.data, this.state.image);
      auth.loginWithJwt(response.headers["x-access-token"]);
      window.location = "/products";
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
      <div className="content">
        <h2>Register Here</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderTextInput("email", "Email")}
          {this.renderTextInput("username", "Username")}
          {this.renderTextInput("contact", "Contact")}
          {this.renderTextInput("password", "Password", "password")}
          {this.renderButton("Sign Up")}
        </form>
      </div>
    );
  }
}

export default CustomerSignUP;
