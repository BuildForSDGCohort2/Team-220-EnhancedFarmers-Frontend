import React from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import CompleteTable from "../reUsableComponents/tableReUse";
import { getAllInvestors, deleteInvestor } from "../../services/investor";

class investorsTable extends CompleteTable {
    state = {
      items: [],
      columns: [],
      currentPage: 1,
      pageSize: 10,
      searchQuery: "",
    }

   columns = [
     {
       path: "name",
       label: "Name",
       content: (investor) => <Link to={`/investors/${investor.id}`}>{investor.name}</Link>
     },
     { path: "contact", label: "Contact" },
     { path: "email", label: "Company Email" },

     {
       key: "delete",
       content: (investor) => (
         <button
           onClick={() => this.handleDelete(investor)}
           className="btn btn-danger btn-sm"
         >
           Delete
         </button>
       )
     }
   ];

   handleDelete = async (investor) => {
     const allItems = this.state.items;
     const investors = allItems.filter((m) => m !== investor);
     this.setState({ items: investors });
     try {
       const response = await deleteInvestor(investor.id);
       toast.success(response.data.message);
     } catch (ex) {
       if (ex.response && ex.response.status === 404) {
         toast.info("investor is not found or it was deleted");
       }
       if (ex.response && ex.response.status === 401) {
         toast.info("Sorry! You have no right to delete a investor");
       }

       this.setState({ items: allItems });
     }
   };

   componentDidMount = async () => {
     const { data } = await getAllInvestors();

     this.setState({ items: data.data, columns: this.columns });
   }

   render() {
     return (
       <div className="container">
         <Link className="btn btn-primary" to="/investors/register">create investor</Link>
         {this.renderTable()}
       </div>
     );
   }
}

export default investorsTable;
