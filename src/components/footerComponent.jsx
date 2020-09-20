import React from "react";
import "./componentStyles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="page-footer font-small bg-primary">
    <div className="container text-center text-md-left">
      <div className="row">
        <div
          className="col-md-4
          mx-auto"
        >
          <h5 className="font-weight-bold text-uppercase mt-3 mb-4 text-white">
            PAGES
          </h5>

          <ul className="list-unstyled">
            <li>
              <Link className="page" to="/">
                Home Page
              </Link>
            </li>
            <li>
              <Link className="page" to="/investors/register">
                Become An Investor
              </Link>
            </li>
            <li>
              <Link className="page" to="/logins">
                Log In
              </Link>
            </li>
          </ul>
        </div>

        <hr className="clearfix w-100 d-md-none" />

        <div className="col-md-4 mx-auto">
          <h5 className="font-weight-bold text-uppercase mt-3 mb-4 text-white">
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
            <li>
              <p className="page">Access to Machinery</p>
            </li>
          </ul>
        </div>

        <hr className="clearfix w-100 d-md-none" />

        <div className="col-md-4 mx-auto">
          <h5 className="font-weight-bold text-uppercase mt-3 mb-4 text-white">
            Contact Us
          </h5>
          <p className="page">kyakusahmed@outlook.com</p>
          <p className="page">+256706196611</p>
          <p className="page">mugabamuha@gmail.com</p>
          <p className="page">+256705938222</p>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3 border-top border-white text-white">
      © 2020 copyright
    </div>
  </footer>
);

export default Footer;
