import React from "react";
import PropTypes from "prop-types";

function TableHeader({ columns }) {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.path || column.key}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}
TableHeader.protoTypes = {
  columns: PropTypes.array.isRequired
};

export default TableHeader;
