import React from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import CompleteTable from "../reUsableComponents/tableReUse";
import { paginate } from "../../services/paginate";
import { fetchAllOrders, deleteOrder } from "../../services/orders";

class AllOrders extends CompleteTable {
  state = {
    items: [],
    columns: [],
    currentPage: 1,
    pageSize: 10,
    searchQuery: "",
  };

  columnsData = [
    { path: "name", label: "Name" },
    { path: "email", label: "Email" },
    { path: "contact", label: "Customer contact" },
    { path: "product", label: "Product" },
    { path: "price", label: "sell per each" },
    { path: "quantity", label: "Quantity" },
    { path: "offered_price", label: "Bought At" },
    { path: "total", label: "Amount to pay" },
    {
      path: "status",
      label: "Status",
      content: (order) => (
        <Link to={`/order/admin_change/status/${order.id}`}>
          {order.status}
        </Link>
      ),
    },
    {
      key: "delete",
      content: (order) => (
        <button
          onClick={() => this.handleDelete(order)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  handleDelete = async (order) => {
    const allItems = this.state.items;
    const orders = allItems.filter((m) => m !== order);
    this.setState({ items: orders });
    try {
      const response = await deleteOrder(order.id);
      toast.success(response.data.message);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.info("order is not found or it was deleted");
      }
      if (ex.response && ex.response.status === 401) {
        toast.info("Sorry! You have no right to delete a order");
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
          m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.product.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    const pagination = paginate(filtered, currentPage, pageSize);

    return { totalCount: filtered.length, data: pagination };
  };

  componentDidMount = async () => {
    const { data } = await fetchAllOrders();

    this.setState({ items: data.data, columns: this.columnsData });
  };

  render() {
    return (
      <div className="container bg-light">
        <h1>All orders made</h1>
        {this.renderTable()}
      </div>
    );
  }
}

export default AllOrders;
