import React, { Component } from "react";

import Card from "./displaySingleitemComponent";
import Pagination from "./paginationComponent";
import { paginate } from "../../services/paginate";
import SearchBox from "./searchBox";

import "./reusableStylesComponent/flexDisplay.css";

class DisplayItems extends Component {
  state = {
    data: [],
    currentPage: 1,
    pageSize: 16,
    searchQuery: ""
  };

  handlePageChage = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  pageData = () => {
    const { data: allData, pageSize, currentPage, searchQuery } = this.state;
    let dataToUse = allData;

    if (searchQuery) {
      dataToUse = allData
        .filter((m) => m.category.toLowerCase().startsWith(searchQuery.toLowerCase()));
    }

    const pagination = paginate(dataToUse, currentPage, pageSize);

    return { totalCount: dataToUse.length, data: pagination };
  };

  returnedContent = () => {
    const { currentPage, pageSize, searchQuery } = this.state;
    const { totalCount, data } = this.pageData();
    return (
      <>
        <SearchBox className="search" value={searchQuery} onChange={this.handleSearch} />
        <div className="preview">
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChage}
        />
      </>
    );
  };
}

export default DisplayItems;
