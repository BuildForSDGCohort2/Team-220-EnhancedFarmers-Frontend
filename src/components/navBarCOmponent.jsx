import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./componentStyles/navbarStyles.css";

const NavBar = ({ user }) => (
  <nav className="navbar navbar-expand-lg bg-primary">
    <NavLink className="navbar-brand text-white" to="/">
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
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle text-white"
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
            <Link className="dropdown-item text-white" to="/products">
              frults
            </Link>
            <Link className="dropdown-item text-white" to="products">
              Vegitables
            </Link>
            <div className="dropdown-item" />
            <Link className="dropdown-item text-white" to="/">
              Fish
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/products">
            Products
          </NavLink>
        </li>
        {!user && (
          <>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/logins">
                Login
              </NavLink>
            </li>
          </>
        )}
        {user && user.isAdmin && (
          <>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/professionals">
                Professionals
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/investors">
                Investors
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/projects">
                Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/farmers">
                Farmers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/customers">
                Customers
              </NavLink>
            </li>
          </>
        )}
        {user && user.isAdmin === 0 && (
          <>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/projects">
                Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/farmers">
                Farmers
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to={`/professionals/${user.id}`}
              >
                Me
              </NavLink>
            </li>
          </>
        )}

        {user && (
          <>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/logout">
                Sign Out
              </NavLink>
            </li>
          </>
        )}
      </ul>

      <ul className="navbar-nav ml-auto">
        <>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/customer/signup">
              Become A customer
            </NavLink>
          </li>
        </>
      </ul>
    </div>
  </nav>
);

export default NavBar;
