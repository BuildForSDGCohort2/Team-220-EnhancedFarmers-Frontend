import React from "react";

import Table from "./table";
import Pagination from "./paginationComponent";

const CompleteTable = (props) => {
  const { columns, currentPage, pageSize, getPagedData, handlePageChange } = props;

  const { totalCount, data } = getPagedData;
  return (
    <div>
      <Table data={data} columns={columns} />
      <Pagination
        itemsCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>

  );
};

export default CompleteTable;
