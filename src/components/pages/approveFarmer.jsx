import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import { approveFarmer } from "../../services/farmers";
import FormInput from "../reUsableComponents/formComponent";
import "../forms/formStyles/centerContent.css";

class ApproveFarmer extends FormInput {
  state = {
    data: {
      is_accepted: "",
    },
    errors: {},
  };

  schema = {
    is_accepted: Joi.boolean().required().label("Member"),
  };

  submit = async () => {
    try {
      const farmerId = this.props.match.params.id;

      const res = await approveFarmer(farmerId, this.state.data);
      toast.success(res.data.mesage);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/projects";
    } catch (error) {
      if (error.response) toast.info(error.response.data.message);
    }
  };

  render() {
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit}>
          {this.renderTextInput("is_accepted", "isAccepted")}
          {this.renderButton("Update")}
        </form>
      </div>
    );
  }
}

export default ApproveFarmer;
