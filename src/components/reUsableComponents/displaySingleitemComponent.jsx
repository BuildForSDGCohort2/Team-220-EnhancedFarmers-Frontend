import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { url } from "../../config.json";

import "./reusableStylesComponent/cardStyle.css";

function Card(props) {
  const { item, user, onDelete } = props;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={`${url}/uploads/${item.imageurl}`}
        className="card-img-top"
        alt=""
        style={{ height: "10rem" }}
      />

      <div className="card-body p-0 labels">
        <div className="label">
          <h4>Qnty</h4>
          {item.quantity}
        </div>
        <div className="label">
          <h4>price</h4>
          {item.price}
        </div>
        <div className="label">
          <h4>Name</h4>
          {item.name}
        </div>
      </div>

      <div className="buttons">
        {user && user.isAdmin ? (
          <>
            <Link className="btn btn-primary" to={`/products/${item.id}`}>
              Buy
            </Link>

            <button className="btn btn-danger" onClick={() => onDelete(item)}>
              Delete
            </button>
          </>
        ) : (
          <Link className="btn btn-primary" to={`/products/${item.id}`}>
            Buy
          </Link>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
