import React from "react";

const SearchBox = ({ value, onChange }) => (
  <input
    type="text"
    name="query"
    className="form-control my-3"
    placeholder="I'M LOOKING FOR......"
    value={value}
    style={{ width: 500 }}
    onChange={(e) => onChange(e.currentTarget.value)}
  />
);

export default SearchBox;
