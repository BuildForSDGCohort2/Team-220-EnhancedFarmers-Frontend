import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import CompleteTable from "../reUsableComponents/tableReUse";
import { paginate } from "../../services/paginate";
import { getAllCustomers, deleteCustomer } from "../../services/customers";

class CustomerTable extends CompleteTable {
  state = {
    items: [],
    columns: [],
    currentPage: 1,
    pageSize: 16,
    searchQuery: "",
  };

  columns = [
    {
      path: "username",
      label: "User Name",
      content: (customer) => (
        <Link to={`/customer/${customer.id}`}>{customer.username}</Link>
      ),
    },
    { path: "email", label: "Email" },
    { path: "contact", label: "Contact" },
    {
      key: "delete",
      content: (customer) => (
        <button
          onClick={() => this.handleDelete(customer)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  handleDelete = async (customer) => {
    const allItems = this.state.items;
    const customers = allItems.filter((m) => m !== customer);
    this.setState({ items: customers });
    try {
      const response = await deleteCustomer(customer.id);
      toast.success(response.data.message);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("customer is not found or it was deleted");
      }
      if (ex.response && ex.response.status === 401) {
        toast.error("Sorry! You have no right to delete a customer");
      }

      this.setState({ items: allItems });
    }
  };

  getPagedData = () => {
    const { pageSize, currentPage, searchQuery, items: allItems } = this.state;

    let filtered = allItems;
    if (searchQuery) {
      filtered = allItems.filter(
        (m) =>
          m.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    const pagination = paginate(filtered, currentPage, pageSize);

    return { totalCount: filtered.length, data: pagination };
  };

  componentDidMount = async () => {
    const { data } = await getAllCustomers();

    this.setState({ items: data.data, columns: this.columns });
  };

  render() {
    return <div className="container bg-light">{this.renderTable()}</div>;
  }
}

export default CustomerTable;
