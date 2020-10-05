import React from "react";
import { Link } from "react-router-dom";

import DisplayItems from "../reUsableComponents/itemsDisplayOnPage";
import auth from "../../services/authServices";
import { getAllProducts } from "../../services/products";

class ProductPage extends DisplayItems {
  state = {
    data: [],
    currentPage: 1,
    pageSize: 16,
    user: {},
  };

  async componentDidMount() {
    let products = [...this.state.data];
    products = await getAllProducts();
    const currentUser = await auth.getCurrentUser();

    this.setState({ data: products.data.data, user: currentUser });
  }

  render() {
    const { user } = this.props;
    return (
      <>
        <div>
          {user && (user.isAdmin || user.isAdmin === false) ? (
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
          <h2>Our Products</h2>
          {this.returnedContent()}
        </div>
      </>
    );
  }
}

export default ProductPage;
