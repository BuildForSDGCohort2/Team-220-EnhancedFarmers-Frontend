import React from "react";
import TableHeader from "./tableHeaders";
import TableBody from "./tableBody";

const Table = (props) => {
  const { columns, data } = props;
  return (
    <div className="table-responsive">
      <table className="table table-hover table-bordered table-dark">
        <TableHeader columns={columns} />
        <TableBody data={data} columns={columns} />
      </table>
    </div>
  );
};

export default Table;
