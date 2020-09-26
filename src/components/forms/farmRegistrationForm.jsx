import React from "react";
import Joi from "joi-browser";

import FormInput from "../reUsableComponents/formComponent";
import "./formStyles/centerContent.css";

class FarmRegistrationForm extends FormInput {
  state = {
    data: {
      farmer_id: "",
      location: "",
      size: "",
    },
    errors: {},
  };

  schema = {
    farmer_id: Joi.string().required(),
    location: Joi.string().required(),
    // is_accepted: Joi.Boolean().required(),
    size: Joi.string().required(),
  };

  submit = () => {
    const { state } = this.props.location;
    window.location = state ? state.from.pathname : "/";
  };

  render() {
    return (
      <div class="farmRegistration">
        <form onSubmit={this.handleSubmit}>
          <h2>Farm Details</h2>
          {this.renderTextInput("farmer_id", "Farmer")}
          {this.renderTextInput("location", "Location")}
          {this.renderTextInput("size", "Size")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default FarmRegistrationForm;
