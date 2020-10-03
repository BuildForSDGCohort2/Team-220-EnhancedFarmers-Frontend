import React from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import FormInput from "../reUsableComponents/formComponent";
import { loginCustomer } from "../../services/authServices";

class CustomerLogin extends FormInput {
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
      await loginCustomer(email, password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/products";
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
        <h2>Customer Login here</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderTextInput("email", "Email", "email")}
          {this.renderTextInput("password", "Password", "password")}
          {this.renderButton("Login")}
          <br />
          <Link to="/customer/change/password" style={{ color: "white" }}>
            forgot password
          </Link>
        </form>
      </div>
    );
  }
}

export default CustomerLogin;
