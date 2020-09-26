import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  const { item, user, onDelete } = props;

  return (
    <div className="card mt-5" style={{ width: "18rem" }}>
      <img
        src={require(`../../images/${item.image}`)}
        className="card-img-top"
        alt=""
        style={{ height: "10rem" }}
      />
      <div className="card-body m-0.5">
        <div className="row">
          <div className="col-">
            <h4>Quantity</h4>
            {item.quantity}
          </div>
          <div className="col">
            <h4>price</h4>
            {item.price}
          </div>
          <button className="col btn btn-primary"> Buy </button>
          <div className="col- ">
            <h4>price</h4>
            {item.price}
          </div>
        </div>
        <div className="row">
          {user && user.isAdmin ? (
            <>
              <div className="col">
                <Link className="btn btn-primary " to={`/products/${item.id}`}>
                  Buy
                </Link>
              </div>

              <div className="col">
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(item)}
                >
                  Delete
                </button>
              </div>
            </>
          ) : (
            <Link to={`/products/${item.id}`}> Buy</Link>
          )}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
