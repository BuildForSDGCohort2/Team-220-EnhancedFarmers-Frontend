import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { url } from "../../config.json";
import Table from "../reUsableComponents/table";
import { getSingleCustomer } from "../../services/customers";
import { getAllOrdersByCustomer } from "../../services/orders";
import auth from "../../services/authServices";
import "./pageStyles/detail.css";

const CustomerDetails = (props) => {
  const [customer, setCustomer] = useState({});
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const customerId = props.match.params.id;
    const getPro = async () => {
      const { data } = await getSingleCustomer(customerId);
      setCustomer(data.data);
    };

    const getOrders = async () => {
      const { data } = await getAllOrdersByCustomer(customerId);
      setOrders(data.data);
    };

    const getUser = async () => {
      const currentUser = await auth.getCurrentUser();
      setUser(currentUser);
    };
    getOrders();
    getPro();
    getUser();
  }, [props]);

  const columns = [
    { path: "name", label: "Name" },
    { path: "email", label: "Email" },
    { path: "contact", label: "contact" },
    { path: "product", label: "Product" },
    { path: "offered_price", label: "Bought Amount" },
  ];

  const { email, username, imageurl, contact } = customer;

  return (
    <div className="container detail bg-light">
      <div className="image">
        <img src={`${url}/uploads/${imageurl}`} alt="no profile pic" />
        {user && user.username && !imageurl && (
          <Link to="/customer/image">Add image</Link>
        )}
      </div>
      <h2>Everything about the Customer</h2>
      <div className="col-5">
        <dl className="row">
          <dt className="col">Email</dt>
          <dd className="col">{email}</dd>
        </dl>

        <dl className="row">
          <dt className="col">User Name</dt>
          <dd className="col">{username}</dd>
        </dl>

        <dl className="row">
          <dt className="col">Contact</dt>
          <dd className="col">{contact}</dd>
        </dl>
      </div>
      <div />

      <div className="tabledata">
        {!orders.length ? (
          <h4>No orders Mr/Mrs {username} has made yet</h4>
        ) : (
          <>
            <h3> Orders By {username}</h3>

            <Table data={orders} columns={columns} />
          </>
        )}
      </div>
    </div>
  );
};

export default CustomerDetails;
