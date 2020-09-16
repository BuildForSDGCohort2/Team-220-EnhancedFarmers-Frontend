import React from "react";
import Joi from "joi-browser";

import FormInput from "../reUsableComponents/formComponent";

import "./formStyles/centerContent.css";

class ProductForm extends FormInput {
  state = {
    data: {
      farmer_id: 0,
      project_id: 0,
      category: "",
      quantity: "",
      price: "",
      location: "",
    },
    farmers: [],
    projects: [],
    errors: {},
  };

  schema = {
    farmer_id: Joi.number().required().label("farmerId"),
    project_id: Joi.number().required().label("projectId"),
    category: Joi.string().required().label("Category"),
    quantity: Joi.number().required(),
    price: Joi.number().required(),
    location: Joi.string().required(),
  };

  componentDidMount = () => {

  }

  submit = () => {
    const { state } = this.props.location;
    window.location = state ? state.from.pathname : "/";
  };

  render() {
    const { farmers, projects } = this.state;
    return (
      <div className="content">
        <h3>Register A Product here </h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderSelect("farmer_id", "Farmer", farmers)}
          {this.renderSelect("project_id", "Project", projects)}
          {this.renderTextInput("category", "Category")}
          {this.renderTextInput("quantity", "Quantity", "number")}
          {this.renderTextInput("price", "Price", "number")}
          {this.renderTextInput("location", "Location")}
          {this.renderButton("Register Product")}
        </form>
      </div>
    );
  }
}

export default ProductForm;
