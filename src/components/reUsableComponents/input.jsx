import React from "react";
import PropTypes from "prop-types";

function TextInput({ name, error, label, placeholder, ...otherProps }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...otherProps} id={name} name={name} className="form-control" placeholder={placeholder} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}
TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

export default TextInput;
