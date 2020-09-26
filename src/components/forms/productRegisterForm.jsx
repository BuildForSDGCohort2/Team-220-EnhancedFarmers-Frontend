import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import FormInput from "../reUsableComponents/formComponent";
import { getAllFarmers } from "../../services/farmers";
import { getAllProjects } from "../../services/projects";
import { createAproduct } from "../../services/products";

import "./formStyles/centerContent.css";

class ProductForm extends FormInput {
  state = {
    data: {
      farmer_id: "",
      project_id: "",
      name: "",
      category: "",
      quantity: "",
      price: "",
    },
    errors: {},
    farmers: [],
    projects: [],
  };

  schema = {
    farmer_id: Joi.number().required().label("farmerId"),
    project_id: Joi.number().required().label("projectId"),
    name: Joi.string().required(),
    category: Joi.string().required().label("Category"),
    quantity: Joi.number().required(),
    price: Joi.number().required(),
  };

  submit = async () => {
    try {
      await createAproduct(this.state.data, this.state.image);
      window.location = "/";
    } catch (ex) {
      if (ex.response) {
        console.log(ex.response);
        const returnErrors = ex.response.data.message;
        this.setState({ errors: returnErrors });
        toast.warning(this.state.errors);
      }
    }
  };

  async populateLists() {
    try {
      const res = await getAllFarmers();
      const res1 = await getAllProjects();
      this.setState({
        farmers: res.data.data,
        projects: res1.data.data,
      });
    } catch (ex) {
      if (ex.response) {
        const returnedErrors = ex.response.data.message;

        this.setState({ errors: returnedErrors });
        toast.warning(this.state.errors);
      }
    }
  }

  componentDidMount = async () => {
    await this.populateLists();
  };

  render() {
    const { farmers, projects } = this.state;
    return (
      <div className="content">
        <h3>Register A Product here </h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderSelect("farmer_id", "Farmer", farmers)}
          {this.renderSelect("project_id", "Project", projects)}
          {this.renderTextInput("name", "Product Name")}
          {this.renderTextInput("category", "Category")}
          {this.renderTextInput("quantity", "Quantity", "number")}
          {this.renderTextInput("price", "Price", "number")}
          {this.renderFileInput("product Image")}
          {this.renderButton("Register Product")}
        </form>
      </div>
    );
  }
}

export default ProductForm;
