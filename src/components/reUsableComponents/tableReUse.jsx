import React, { Component } from "react";

import Pagination from "./paginationComponent";
import SearchBox from "./searchBox";
import { paginate } from "../../services/paginate";

import Table from "./table";

class CompleteTable extends Component {
  state = {
    items: [],
    currentPage: 1,
    pageSize: 10,
    searchQuery: "",
    columns: []
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  }

 handleSearch = (query) => {
   this.setState({ searchQuery: query, currentPage: 1 });
 };

  getPagedData = () => {
    const { pageSize, currentPage, searchQuery, items: allItems } = this.state;

    let filtered = allItems;
    if (searchQuery) {
      filtered = allItems
        .filter((m) => m.name.toLowerCase().startsWith(searchQuery.toLowerCase()));
    }

    const pagination = paginate(filtered, currentPage, pageSize);
    return { totalCount: filtered.length, data: pagination };
  };

    renderTable=() => {
      const { totalCount, data } = this.getPagedData();
      const { columns, searchQuery, currentPage, pageSize } = this.state;
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
    }
}

export default CompleteTable;
