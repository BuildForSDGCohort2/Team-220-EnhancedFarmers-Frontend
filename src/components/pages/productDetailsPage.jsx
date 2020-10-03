/* eslint-disable consistent-return */
import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import { url } from "../../config.json";
import FormInput from "../reUsableComponents/formComponent";
import Card from "../reUsableComponents/displaySingleitemComponent";

import auth from "../../services/authServices";
import {
  getSingleProduct,
  getProductsByCatory,
  deleteProduct,
} from "../../services/products";
import { createOrder } from "../../services/orders";

import "./pageStyles/detail.css";

class ProductDetails extends FormInput {
  state = {
    data: {
      product_id: this.props.match.params.id,
      quantity: "",
      offered_price: "",
    },
    errors: {},
    product: {},
    products: [],
    user: {},
  };

  schema = {
    product_id: Joi.number().required(),
    quantity: Joi.number().required().label("Quantity"),
    offered_price: Joi.number().required().label("Your Bid"),
  };

  submit = async () => {
    const { user } = this.state;
    try {
      await createOrder(this.state.data);
      window.location = `/customer/${user.id}`;
    } catch (ex) {
      if (ex.response) {
        const returnErrors = ex.response.data.message;
        this.setState({ errors: returnErrors });
        toast.warning(this.state.errors);
      }
    }
  };

  handleDelete = async (item) => {
    const { products: allItems } = this.state;

    const remaining = allItems.filter((m) => m !== item);
    this.setState({ products: remaining });
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

      this.setState({ products: allItems });
    }
  };

  componentDidMount = async () => {
    const productId = this.props.match.params.id;
    const { data } = await getSingleProduct(productId);
    const products = await getProductsByCatory(data.data.category);
    const currentUser = await auth.getCurrentUser();

    this.setState({
      product: data.data,
      products: products.data.data,
      user: currentUser,
    });
  };

  render() {
    const { products, user } = this.state;
    const {
      id,
      name,
      quantity,
      imageurl,
      category,
      price,
    } = this.state.product;

    return (
      <>
        <div className="container bg-light p-0">
          <div className="product">
            <div>
              <h2>product image</h2>
              <img src={`${url}/uploads/${imageurl}`} alt="product_image" />
            </div>
            <div>
              <h1>Product Details</h1>
              <dl className="row">
                <dt className="col">Name</dt>
                <dd className="col">{name}</dd>
              </dl>
              <dl className="row">
                <dt className="col">category</dt>
                <dd className="col">{category}</dd>
              </dl>
              <dl className="row">
                <dt className="col">Price Per Each</dt>
                <dd className="col">{price}</dd>
              </dl>
              <dl className="row">
                <dt className="col">Quantity In Stock</dt>
                <dd className="col">{quantity}</dd>
              </dl>
            </div>
            <div className="unique content p-0">
              <h3>Create An order</h3>
              <p>Your bid must be per each</p>
              <form onSubmit={this.handleSubmit}>
                {this.renderTextInput("quantity", "Quantity", "number")}
                {this.renderTextInput("offered_price", "Your Bid", "number")}
                {this.renderButton("Order")}
              </form>
            </div>
          </div>
        </div>
        <div className="container bg-light">
          <h1>You May Also Like</h1>
          <div className="preview">
            {products
              .filter((item) => item.id !== id)
              .map((item) => (
                <Card
                  key={item.id}
                  item={item}
                  user={user}
                  onDelete={this.handleDelete}
                />
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default ProductDetails;
