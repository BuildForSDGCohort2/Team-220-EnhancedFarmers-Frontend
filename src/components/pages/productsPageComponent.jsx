import React from "react";
import { Link } from "react-router-dom";

import DisplayItems from "../reUsableComponents/itemsDisplayOnPage";
import auth from "../../services/authServices";
import query from "../../services/demoData";

class ProductPage extends DisplayItems {
  state = {
    data: [],
    currentPage: 1,
    pageSize: 16,
    user: {},
  };

  async componentDidMount() {
    let products = [...this.state.data];
    products = await query.getAllProducts();
    const currentUser = await auth.getCurrentUser();

    this.setState({ data: products, user: currentUser });
  }

  render() {
    const { user } = this.props;
    return (
      <>
        <div>
          {user.isAdmin ? (
            <Link
              to="/products/register"
              className="btn btn-primary"
              style={{ margin: 20 }}
            >
              Create Product
            </Link>
          ) : (
            ""
          )}
        </div>
        {this.returnedContent()}
      </>
    );
  }
}

export default ProductPage;
