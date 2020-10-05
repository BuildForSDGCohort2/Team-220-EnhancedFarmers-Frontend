import React from "react";
import { toast } from "react-toastify";
import Joi from "joi-browser";

import FormInput from "../reUsableComponents/formComponent";
import { adminChangeBidPrice } from "../../services/orders";

class UpdateOfferedPrice extends FormInput {
  state = {
    data: {
      price: "",
    },
    errors: {},
  };

  schema = {
    price: Joi.number().required(),
  };

  submit = async () => {
    // const { user } = this.props;
    try {
      const orderId = this.props.match.params.id;
      const response = await adminChangeBidPrice(orderId, this.state.data);
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
          {this.renderTextInput("price", "Your New Price", "number")}
          {this.renderButton("Send")}
        </form>
      </div>
    );
  }
}

export default UpdateOfferedPrice;
