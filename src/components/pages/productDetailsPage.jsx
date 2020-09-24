import React, { Component } from "react";

import "./pageStyles/detail.css";

class ProductDetails extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <img
                src={require("../../images/pic.jpg")}
                className="card-img-top img-fluid"
                alt="professional"
              />
            </div>
          </div>
          <div className="col-md-7 color">
            <h1>Everything about the Professional</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
