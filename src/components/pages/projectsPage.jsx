import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import CompleteTable from "../reUsableComponents/tableReUse";
import { getAllProjects, deleteProject } from "../../services/projects";

class ProjectsPage extends CompleteTable {
  state = {
    items: [],
    pageSize: 16,
    currentPage: 1,
    columns: [],
  };

  columns = [
    { path: "farmer", label: "Farmer" },
    { path: "professional", label: "Professional" },
    { path: "investor", label: "Investor" },
    { path: "investedAmount", label: "Min Investiment" },
    { path: "maxAmountToInvest", label: "Max Investment Amount" },
    { path: "harvestPeriod", label: "Expected End Date" },
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

  handleDelete = async (project) => {
    const allItems = this.state.items;
    const projects = allItems.filter((m) => m !== project);
    this.setState({ items: projects });
    try {
      const response = await deleteProject(project.id);
      toast.success(response.data.message);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("project is not found or it was deleted");
      }
      if (ex.response && ex.response.status === 401) {
        toast.error("Sorry! You have no right to delete a project");
      }

      this.setState({ items: allItems });
    }
  };

  async componentDidMount() {
    const res = await getAllProjects();
    this.setState({ items: res.data.data, columns: this.columns });
  }

  render() {
    const { user } = this.props;
    if (user && user.isAdmin) this.columns.push(this.delete);

    return (
      <div className="container bg-light">
        <div>
          {(user.isAdmin === 1 || user.isAdmin === 0) && (
            <Link to="/projects/create" className="btn btn-primary">
              New Project
            </Link>
          )}
        </div>
        {this.renderTable()}
      </div>
    );
  }
}
export default ProjectsPage;
