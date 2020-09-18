import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./componentStyles/navbarStyles.css";

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-primary">
    <NavLink className="navbar-brand" to="/">
      Home
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      style={{ Color: "white" }}
    >
      <span className="navbar-toggler-icon" />
    </button>
    

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="/"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Category
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/products">
              frults
            </Link>
            <Link className="dropdown-item" to="products">
              Vegitables
            </Link>
            <div className="dropdown-item" />
            <Link className="dropdown-item" to="/">
              Fish
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">
            Products
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/professionals">
            Professionals
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/investors">
            Investors
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/logins">
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
