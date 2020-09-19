import React from "react";
import { Link } from "react-router-dom";

import "./componentStyles/login.css";

const LoginPageLinks = () => (
  <div className="container bg-primary">
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title btn btn-primary">Professional And Admins</h5>
            <p className="card-text">
              Some quick example text to build on the
              card title and make up the bulk of the cards content.
            </p>
            <Link to="/professionals/login" className="btn btn-primary">Login</Link>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title btn btn-primary">Investors</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </p>
            <Link to="/investors/login" className="btn btn-primary">Login</Link>

          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title btn btn-success">Farmers</h5>
            <p className="card-text">
              Some quick example text to build on the card
              title and make up the bulk of the cards content.
            </p>
            <Link to="/farmers/login" className="btn btn-success">Login</Link>

          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title btn btn-success">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card
              title and make up the bulk of the cards content.
            </p>
            <Link to="/" className="btn btn-success">Login</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LoginPageLinks;
