import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import FormInput from "../reUsableComponents/formComponent";
import { loginProfessional } from "../../services/authServices";
import "./formStyles/centerContent.css";

class ProfessionalLoginForm extends FormInput {
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
      await loginProfessional(email, password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/projects";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const returnedErrors = ex.response.data.message;
        this.setState({ errors: returnedErrors });
        toast.error(this.state.errors);
      }
    }
  };

  render() {
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit}>
          {this.renderTextInput("email", "Email", "email")}
          {this.renderTextInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default ProfessionalLoginForm;
