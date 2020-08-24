import React from "react";

function TextInput({ name, error, label, ...otherProps }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...otherProps} id={name} name={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default TextInput;
