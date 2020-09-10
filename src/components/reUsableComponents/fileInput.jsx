import React from "react";

function FileInput({ name, label, error }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type="file" className="form-control-file" id={name} name={name} accept="image/*" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default FileInput;
