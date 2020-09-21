import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import FormInput from "../reUsableComponents/formComponent";
import { createAProfessional } from "../../services/professionals";
import auth from "../../services/authServices";

import "./formStyles/centerContent.css";

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
    email: Joi.string().email().required().label("Email"),
    fname: Joi.string().required().label("FirstName"),
    lname: Joi.string().required().label("LastName"),
    contact: Joi.string().required().label("Contact"),
    residence: Joi.string().required().label("Residence"),
    profession: Joi.string().required().label("Profession"),
    password: Joi.string().min(6).max(20).required().label("Password"),
  };

  submit = async () => {
    try {
      const response = await createAProfessional(
        this.state.data,
        this.state.image
      );
      auth.loginWithJwt(response.headers["x-access-token"]);
      window.location = "/projects";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const returnErrors = ex.response.data.message;
        this.setState({ errors: returnErrors });
        toast.error(this.state.errors);
      }
    }
  };

  render() {
    return (
      <div className="content">
        <h2> Please register Professional here</h2>
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          {this.renderTextInput("email", "Email", "email")}
          {this.renderTextInput("fname", "First Name")}
          {this.renderTextInput("lname", "Last Name")}
          {this.renderTextInput("contact", "Contact")}
          {this.renderTextInput("residence", "Residence")}
          {this.renderTextInput("profession", "Profession")}
          {this.renderTextInput("password", "Password", "password")}
          {this.renderFileInput()}
          {this.renderButton("Sign Up")}
        </form>
      </div>
    );
  }
}

export default ProfessionalRegForm;
