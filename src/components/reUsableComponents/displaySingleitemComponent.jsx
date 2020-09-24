import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card(props) {
  const { item } = props;

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
<<<<<<< HEAD
          <div className="col-">
=======
          <div className="col">
>>>>>>> 20cc7f50c782f20aff347a7560ea609db6592aba
            <h4>Quantity</h4>
            {item.quantity}
          </div>
          <div className="col">
            <h4>price</h4>
            {item.price}
          </div>
<<<<<<< HEAD
          <button className="col btn btn-primary" onClick={() => links()}>
            {" "}
            Buy{" "}
          </button>
=======
          <Link to={`/product/${item.id}`} className="col btn btn-primary">
            <span style={{ textAlign: "center", marginTop: 10 }}>Buy</span>
          </Link>
>>>>>>> 20cc7f50c782f20aff347a7560ea609db6592aba
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
