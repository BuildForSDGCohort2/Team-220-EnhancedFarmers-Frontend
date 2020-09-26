import React, { Component } from "react";
import { toast } from "react-toastify";

import Card from "./displaySingleitemComponent";
import Pagination from "./paginationComponent";
import { paginate } from "../../services/paginate";
import SearchBox from "./searchBox";
import { deleteProduct } from "../../services/products";

import "./reusableStylesComponent/flexDisplay.css";

class DisplayItems extends Component {
  state = {
    data: [],
    currentPage: 1,
    pageSize: 16,
    searchQuery: "",
    user: {},
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
      dataToUse = allData.filter((m) =>
        m.category.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }

    const pagination = paginate(dataToUse, currentPage, pageSize);

    return { totalCount: dataToUse.length, data: pagination };
  };

  handleDelete = async (item) => {
    const allItems = this.state.data;
    const remaining = allItems.filter((m) => m !== item);
    this.setState({ data: remaining });
    try {
      const response = await deleteProduct(item.id);
      toast.success(response.data.message);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.warn("Product is not found or it was deleted");
      }
      if (ex.response && ex.response.status === 401) {
        toast.error("Sorry! You have no right to delete a item");
      }

      this.setState({ data: allItems });
    }
  };

  returnedContent = () => {
    const { currentPage, pageSize, searchQuery, user } = this.state;
    const { totalCount, data } = this.pageData();
    return (
      <>
        <SearchBox
          className="search"
          value={searchQuery}
          onChange={this.handleSearch}
        />
        <div className="preview">
          {data.map((item) => (
            <Card
              key={item.id}
              item={item}
              user={user}
              onDelete={this.handleDelete}
            />
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
