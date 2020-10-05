import React from "react";
import { toast } from "react-toastify";
import Joi from "joi-browser";

import FormInput from "../reUsableComponents/formComponent";
import { adminChangeStaus } from "../../services/orders";

class UpdateStatus extends FormInput {
  state = {
    data: {
      status: "",
    },
    errors: {},
  };

  schema = {
    status: Joi.string().required().valid("rejected", "pendind", "approved"),
  };

  submit = async () => {
    try {
      const orderId = this.props.match.params.id;
      const response = await adminChangeStaus(orderId, this.state.data);
      toast.info(response.data.message);
      window.location = "/products";
    } catch (ex) {
      if (ex.response) {
        const returnErrors = ex.response.data.message;
        this.setState({ errors: returnErrors });
        toast.error(this.state.errors);
      }
    }
  };

  render() {
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit}>
          {this.renderTextInput("status", "Your New status")}
          {this.renderButton("Send")}
        </form>
      </div>
    );
  }
}

export default UpdateStatus;
