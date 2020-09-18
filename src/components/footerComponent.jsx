import React from "react";
import "./componentStyles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer
    className="page-footer font-small indigo"
    style={{ backgroundColor: "#535c68", color: "white" }}
  >
    <div className="container text-center text-md-left">
      <div className="row">
        <div
          className="col-md-4
         mx-auto"
        >
          <h5 className="font-weight-bold text-uppercase mt-3 mb-4">PAGES</h5>

          <ul className="list-unstyled">
            <li>
              <Link className="page" to="/">
                Home Page
              </Link>
            </li>
            <li>
              <Link className="page" to="/">
                Sign Up
              </Link>
            </li>
            <li>
              <Link className="page" to="/">
                Log In
              </Link>
            </li>
          </ul>
        </div>

        <hr className="clearfix w-100 d-md-none" />

        <div className="col-md-4 mx-auto">
          <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
            SERVICES
          </h5>

          <ul className="list-unstyled">
            <li>
              <p className="page">Access to loans</p>
            </li>
            <li>
              <p className="page">Access to market</p>
            </li>
            <li>
              <p className="page">Access to professionals</p>
            </li>
            <li>
              <p className="page">Sensitization</p>
            </li>
          </ul>
        </div>

        <hr className="clearfix w-100 d-md-none" />

        <div className="col-md-4 mx-auto">
          <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
            Contact Us
          </h5>
          <p className="page">kyakusahmed@outlook.com</p>
          <p className="page">+256706196611</p>
        </div>
      </div>
    </div>

    <div
      className="footer-copyright text-center py-3"
      style={{ backgroundColor: "#8395a7" }}
    >
      © 2020 copyright
    </div>
  </footer>
);

export default Footer;

{
  /* <p className="m-0 text-center text-white">
  Copyright © Andela build for sustainble goal development 2020
</p> */
}
