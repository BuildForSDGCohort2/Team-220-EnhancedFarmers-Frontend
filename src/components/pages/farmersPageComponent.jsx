import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import CompleteTable from "../reUsableComponents/tableReUse";
import { paginate } from "../../services/paginate";
import { getAllFarmers, deleteFarmer } from "../../services/farmers";

class FarmersPage extends CompleteTable {
  state = {
    items: [],
    columns: [],
    currentPage: 1,
    pageSize: 15,
    searchQuery: "",
  };

  columns = [
    {
      path: "name",
      label: "Name",
      content: (farmer) => (
        <Link to={`/farmers/${farmer.id}`}>{farmer.name}</Link>
      ),
    },
    { path: "email", label: "Email" },
    { path: "location", label: "Location" },
    { path: "contact", label: "Contact" },
    {
      path: "isAccepted",
      label: "Member",
      content: (farmer) => (
        <Link to={`/farmers/${farmer.id}/approve`}>{farmer.isAccepted}</Link>
      ),
    },
  ];

  delete = {
    key: "delete",
    content: (pro) => (
      <button
        onClick={() => this.handleDelete(pro)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    ),
  };

  handleDelete = async (farmer) => {
    const allItems = this.state.items;
    const farmers = allItems.filter((m) => m !== farmer);
    this.setState({ items: farmers });
    try {
      const response = await deleteFarmer(farmer.id);
      toast.success(response.data.message);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.info("farmer is not found or it was deleted");
      }
      if (ex.response && ex.response.status === 401) {
        toast.warn("Sorry! You have no right to delete a farmer");
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
          m.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    const pagination = paginate(filtered, currentPage, pageSize);

    return { totalCount: filtered.length, data: pagination };
  };

  componentDidMount = async () => {
    const { data } = await getAllFarmers();

    this.setState({ items: data.data, columns: this.columns });
  };

  render() {
    const { user } = this.props;
    if (user && user.isAdmin) this.columns.push(this.delete);
    return <div className="container bg-light">{this.renderTable()}</div>;
  }
}

export default FarmersPage;
