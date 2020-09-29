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
          <NavLink
            className="nav-link text-white"
            to="/products"
            activeStyle={{
              fontWeight: "bold",
              backgroundColor: "darkgreen",
              borderRadius: 5,
            }}
          >
            Products
          </NavLink>
        </li>
        {!user && (
          <>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/logins"
                activeStyle={{
                  fontWeight: "bold",
                  backgroundColor: "green",
                  borderRadius: 5,
                }}
              >
                Login
              </NavLink>
            </li>
          </>
        )}
        {user && user.isAdmin && (
          <>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/professionals"
                activeStyle={{
                  fontWeight: "bold",
                  backgroundColor: "darkgreen",
                  borderRadius: 5,
                }}
              >
                Professionals
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/investors"
                activeStyle={{
                  fontWeight: "bold",
                  backgroundColor: "darkgreen",
                  borderRadius: 5,
                }}
              >
                Investors
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/projects"
                activeStyle={{
                  fontWeight: "bold",
                  backgroundColor: "darkgreen",
                  borderRadius: 5,
                }}
              >
                Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/farmers"
                activeStyle={{
                  fontWeight: "bold",
                  backgroundColor: "darkgreen",
                  borderRadius: 5,
                }}
              >
                Farmers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/customers"
                activeStyle={{
                  fontWeight: "bold",
                  backgroundColor: "darkgreen",
                  borderRadius: 5,
                }}
              >
                Customers
              </NavLink>
            </li>
          </>
        )}
        {user && user.isAdmin === 0 && (
          <>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/projects"
                activeStyle={{
                  fontWeight: "bold",
                  backgroundColor: "darkgreen",
                  borderRadius: 5,
                }}
              >
                Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/farmers"
                activeStyle={{
                  fontWeight: "bold",
                  backgroundColor: "darkgreen",
                  borderRadius: 5,
                }}
              >
                Farmers
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to={`/professionals/${user.id}`}
                activeStyle={{
                  fontWeight: "bold",
                  backgroundColor: "darkgreen",
                  borderRadius: 5,
                }}
              >
                Me
              </NavLink>
            </li>
          </>
        )}
        {user && user.username && (
          <li className="nav-item">
            <NavLink
              className="nav-link text-white"
              to={`/customer/${user.id}`}
              activeStyle={{
                fontWeight: "bold",
                backgroundColor: "darkgreen",
                borderRadius: 5,
              }}
            >
              {user.username}
            </NavLink>
          </li>
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
            <NavLink
              className="nav-link text-white"
              to="/customer/signup"
              activeStyle={{
                fontWeight: "bold",
                backgroundColor: "darkgreen",
                borderRadius: 5,
              }}
            >
              Become A customer
            </NavLink>
          </li>
        </>
      </ul>
    </div>
  </nav>
);

export default NavBar;
