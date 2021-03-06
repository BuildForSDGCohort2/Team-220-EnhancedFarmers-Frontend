/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line class-methods-use-this

import React, { Component } from "react";
import Joi from "joi-browser";

import "../forms/formStyles/centerContent.css";

import TextInput from "./input";
import Select from "./select";

class FormInput extends Component {
  state = {
    data: {},
    errors: {},
    image: null,
  };

  validate = () => {
    const errors = {};
    const option = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, option);
    if (!error) {
      return null;
    }

    for (const item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    const data = { ...this.state.data };

    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  onImageChange = (event) => {
    this.setState({ image: event.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) {
      return;
    }
    this.submit();
  };

  renderTextInput(name, label, type = "text") {
    const { errors, data } = this.state;
    return (
      <TextInput
        label={label}
        name={name}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderButton(action) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {action}
      </button>
    );
  }

  renderButton1(action) {
    return <button className="btn btn-primary">{action}</button>;
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderFileInput(name) {
    return (
      <>
        <label htmlFor={name}>{name}</label>
        <input
          className="m-2"
          onChange={this.onImageChange}
          type="file"
          name="image"
          accept="image/*"
        />
      </>
    );
  }

  renderLargeText(name, label) {
    return (
      <>
        <label htmlFor={label}>{label}</label>
        <textarea name={name} onChange={this.handleChange} rows="4" cols="25" />
      </>
    );
  }
}

export default FormInput;
