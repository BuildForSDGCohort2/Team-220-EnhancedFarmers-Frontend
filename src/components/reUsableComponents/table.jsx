import React from "react";
import TableHeader from "./tableHeaders";
import TableBody from "./tableBody";

const Table = (props) => {
  const { columns, data } = props;
  return (
    <table className="table">
      <TableHeader columns={columns} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
