import React from "react";
import { toast } from "react-toastify";
import Joi from "joi-browser";

import FormInput from "../reUsableComponents/formComponent";
import { createAproject } from "../../services/projects";
import { getAllFarmers } from "../../services/farmers";
import { getAllProfessionals } from "../../services/professionals";
import { getAllInvestors } from "../../services/investor";

class ProjectCreation extends FormInput {
  state = {
    data: {
      farmer_id: "",
      profesional_id: "",
      investor_id: "",
      name: "",
      product_category: "",
      amount: "",
      max_amount: "",
      end_time: "",
      description: "",
    },
    errors: {},
    farmers: [],
    professionals: [],
    investors: [],
  };

  schema = {
    farmer_id: Joi.number().required().label("Farmer"),
    profesional_id: Joi.number().required().label("Professional"),
    investor_id: Joi.number().required().label("Investor"),
    name: Joi.string().required().label("Project Name"),
    product_category: Joi.string().required().label("Category"),
    amount: Joi.number().required().label("Amount"),
    max_amount: Joi.number().required().label("Max Amount"),
    end_time: Joi.string().required().label("Expected End Time"),
    description: Joi.string(),
  };

  async populateLists() {
    try {
      const res = await getAllFarmers();
      const res1 = await getAllProfessionals();
      const res2 = await getAllInvestors();

      this.setState({
        farmers: res.data.data,
        professionals: res1.data.data,
        investors: res2.data.data,
      });
    } catch (ex) {
      if (ex.response) {
        const returnedErrors = ex.response.data.message;
        this.setState({ errors: returnedErrors });
        toast.warning(this.state.errors);
      }
    }
  }

  async componentDidMount() {
    await this.populateLists();
  }

  submit = async () => {
    try {
      await createAproject(this.state.data);
      this.props.history.push("/");
    } catch (ex) {
      if (ex.response) {
        const returnErrors = ex.response.data.message;
        this.setState({ errors: returnErrors });
        toast.warning(this.state.errors);
      }
    }
  };

  render() {
    const { farmers, investors, professionals } = this.state;
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit}>
          {this.renderSelect("farmer_id", "Farmer", farmers)}
          {this.renderSelect(
            "profesional_id",
            "Professional To Monitor",
            professionals
          )}
          {this.renderSelect(
            "investor_id",
            "Investor Ready To invest",
            investors
          )}
          {this.renderTextInput("name", "Location")}
          {this.renderTextInput("product_category", "Category Of Product")}
          {this.renderTextInput("amount", "Min Invest", "number")}
          {this.renderTextInput("max_amount", "Max Invest", "number")}
          {this.renderTextInput("end_time", "Expected End", "date")}
          {this.renderLargeText("description", "Description")}
          {this.renderButton("Create")}
        </form>
      </div>
    );
  }
}

export default ProjectCreation;
