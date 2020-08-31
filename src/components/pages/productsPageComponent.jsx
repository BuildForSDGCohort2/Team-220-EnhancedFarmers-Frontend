import React from "react";
import DisplayItems from "../reUsableComponents/itemsDisplayOnPage";
import query from "../../services/demoData";

class ProductPage extends DisplayItems {
    state={
      data: [],
      currentPage: 1,
      pageSize: 16,
    }

    async componentDidMount() {
      let products = [...this.state.data];
      products = await query.getAllProducts();

      this.setState({ data: products });
    }

    render() {
      return (
        <>
          {this.returnedContent()}
        </>
      );
    }
}

export default ProductPage;
