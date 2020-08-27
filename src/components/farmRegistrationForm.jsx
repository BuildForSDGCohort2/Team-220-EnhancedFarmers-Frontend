import React from "react";
import Joi from "joi-browser";

import FormInput from "./reUsableComponents/formComponent";

class FarmRegistrationForm extends FormInput {
  state = {
    data: {
      farmer_id: "",
      location: "",
      is_accepted: "",
      size: ""      
    },
    errors: {},
  };

  schema = {
    farmer_id: Joi.string().required(),
    location: Joi.string().required(),
    // is_accepted: Joi.Boolean().required(),
    size: Joi.string().required()
  };

  submit = () => {
    const { state } = this.props.location;
    window.location = state ? state.from.pathname : "/";
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderTextInput("farmer_id", "farmer_id")}
           {this.renderTextInput("location", "Location")}
          {this.renderTextInput("size", "size")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default FarmRegistrationForm;
