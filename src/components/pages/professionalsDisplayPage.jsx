import React from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import CompleteTable from "../reUsableComponents/tableReUse";
import {
  getAllProfessionals,
  deleteProfessional,
} from "../../services/professionals";

class ProfessionalsTable extends CompleteTable {
  state = {
    items: [],
    columns: [],
    currentPage: 1,
    pageSize: 10,
    searchQuery: "",
  };

  columns = [
    {
      path: "name",
      label: "Name",
      content: (professional) => (
        <Link to={`/professionals/${professional.id}`}>
          {professional.name}
        </Link>
      ),
    },
    { path: "Contact", label: "Contact" },
    { path: "Residence", label: "Residence" },
    { path: "Profession", label: "Profession" },
    { path: "isAdmin", label: "isAdmin" },
    {
      key: "delete",
      content: (pro) => (
        <button
          onClick={() => this.handleDelete(pro)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  handleDelete = async (professional) => {
    const allItems = this.state.items;
    const professionals = allItems.filter((m) => m !== professional);
    this.setState({ items: professionals });
    try {
      const response = await deleteProfessional(professional.id);
      toast.success(response.data.message);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("professional is not found or it was deleted");
      }
      if (ex.response && ex.response.status === 401) {
        toast.error("Sorry! You have no right to delete a professional");
      }

      this.setState({ items: allItems });
    }
  };

  componentDidMount = async () => {
    const { data } = await getAllProfessionals();

    this.setState({ items: data.data, columns: this.columns });
  };

  render() {
    return (
      <div className="container bg-light">
        <Link className="btn btn-primary" to="/professionals/signup">
          create professional
        </Link>
        {this.renderTable()}
      </div>
    );
  }
}

export default ProfessionalsTable;
