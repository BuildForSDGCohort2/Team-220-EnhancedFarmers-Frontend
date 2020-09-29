import React from "react";
import { toast } from "react-toastify";

import FormInput from "../reUsableComponents/formComponent";
import { updateImage } from "../../services/customers";

import "./formStyles/centerContent.css";

class ImageUpdate extends FormInput {
  handleSubmitImage = (e) => {
    e.preventDefault();
    this.submit();
  };
  submit = async () => {
    try {
      const res = await updateImage(this.state.image);
      toast.success(res.data.message);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response) {
        toast.error(ex.response.data.message);
      }
    }
  };

  render() {
    return (
      <div className="content">
        <h3>Image Update</h3>
        <form onSubmit={this.handleSubmitImage}>
          {this.renderFileInput("your profile Image")}
          {this.renderButton1("Update")}
        </form>
      </div>
    );
  }
}

export default ImageUpdate;
