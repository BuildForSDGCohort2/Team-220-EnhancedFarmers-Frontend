import React from "react";
import Joi from "joi-browser";

import FormInput from "../reUsableComponents/formComponent";

class ProductForm extends FormInput {
  state = {
    data: {
      farmer_id: "",
      product_category: "",
      quantity: "",
      price: "",
      location: "",
    },
    errors: {},
  };

  schema = {
    farmer_id: Joi.number().required(),
    product_category: Joi.string().required().label("Category"),
    quantity: Joi.number().required(),
    price: Joi.number().required(),
    location: Joi.string().required(),
  };

  submit = () => {
    const { state } = this.props.location;
    window.location = state ? state.from.pathname : "/";
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderTextInput("farmer_id", "FarmerId", "number")}
        {this.renderTextInput("product_category", "Category")}
        {this.renderTextInput("quantity", "Quantity", "number")}
        {this.renderTextInput("price", "Price", "number")}
        {this.renderTextInput("location", "Location")}
        {this.renderButton("Register Product")}
      </form>
    );
  }
}

export default ProductForm;
