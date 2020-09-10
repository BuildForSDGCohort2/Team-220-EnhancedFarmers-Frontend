import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./reusableStylesComponent/cardStyle.css";

function Card(props) {
  const { item } = props;
  return (
    <div className="card mt-5" style={{ width: "18rem" }}>
      <img
        src={require(`../../images/${item.image}`)}
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col-">
              <h4>Quantity</h4>
              {item.quantity}
            </div>
            <div className="col">
              <h4>price</h4>
              {item.price}
            </div>
            <Link to={`/product/${item.id}`} className="col btn btn-success">
              buy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
