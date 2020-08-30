import React, { Component } from "react";

import Card from "./displaySingleitemComponent";
import Pagination from "./paginationComponent";
import { paginate } from "../../services/paginate";

import "./reusableStylesComponent/flexDisplay.css";

class DisplayItems extends Component {
  state = {
    data: [],
    currentPage: 1,
    pageSize: 16,
  };

  handlePageChage = (page) => {
    this.setState({ currentPage: page });
  };

  pageData = () => {
    const { data, pageSize, currentPage } = this.state;
    let dataToUse = data;

    const pagination = paginate(dataToUse, currentPage, pageSize);

    return { totalCount: dataToUse.length, data: pagination };
  };

  returnedContent = () => {
    const { currentPage, pageSize } = this.state;
    const { totalCount, data } = this.pageData();
    return (
      <>
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
