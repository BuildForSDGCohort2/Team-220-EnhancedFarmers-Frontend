import React from "react";

function FileInput({ name, label }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type="file" className="form-control-file" id={name} name={name} accept="image/*" />
    </div>
  );
}

export default FileInput;
