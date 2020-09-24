import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card(props) {
  const { item } = props;
  const links = () => <Link to={`/product/${item.id}`} />;
  return (
    <div className="card mt-5" style={{ width: "18rem" }}>
      <img
        src={require(`../../images/${item.image}`)}
        className="card-img-top"
        alt=""
        style={{ height: "10rem" }}
      />
      <div className="card-body">
        <div className="row">
          <div className="col-">
            <h4>Quantity</h4>
            {item.quantity}
          </div>
          <div className="col">
            <h4>price</h4>
            {item.price}
          </div>
          <button className="col btn btn-primary" onClick={() => links()}>
            {" "}
            Buy{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
