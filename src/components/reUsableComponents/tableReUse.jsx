import React, { Component } from "react";

import Pagination from "./paginationComponent";
import SearchBox from "./searchBox";

import Table from "./table";

class CompleteTable extends Component {
  state = {
    currentPage: 1,
    pageSize: 10,
    searchQuery: "",
    columns: [],
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  renderTable = () => {
    const { totalCount, data } = this.getPagedData();
    const { columns, searchQuery, currentPage, pageSize } = this.state;
    if (!data.length) {
      return (
        <>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <h1>No Items Yet</h1>
        </>
      );
    }
    return (
      <div>
        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        <Table columns={columns} data={data} />
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  };
}

export default CompleteTable;
