import React from "react";
import { Link } from "react-router-dom";

import "./pageStyles/homePage.css";

const HomePage = () => (
  <div className="container-fluid">
    <h1>ENHANCED PROJECTS LOOK INTO</h1>
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        <li data-target="#carouselExampleIndicators" data-slide-to="3" />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src={require("../../images/Spinach.jpg")}
            alt="Cabbage Garden"
            style={{ filter: "brightness(70%)" }}
          />

          <div className="carousel-caption d-none d-md-block">
            <h2>
              Are you a new farmer with land and looking for finances to start!
            </h2>
          </div>
        </div>
        <div className="carousel-item" style={{ opacity: "0.6" }}>
          <img
            className="d-block w-100"
            src={require("../../images/cabbages.jpeg")}
            alt="Cabbage Project"
            style={{ filter: "brightness(70%)" }}
          />

          <div className="carousel-caption d-none d-md-block">
            <h2>Cabbage project In Progress</h2>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={require("../../images/maize1.jpeg")}
            alt="Third slide"
            style={{ filter: "brightness(60%)" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>
              Are you an investor looking for investment opportunities in
              agriculture!
            </h2>
          </div>
        </div>

        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={require("../../images/chicken.jpeg")}
            alt="Poutry Project"
            style={{ filter: "brightness(60%)" }}
          />
        </div>
      </div>
    </div>

    <h1> About Us </h1>

    <div className="upper bg-secondary">
      <div className="headers">
        <h6 style={{ color: "#ecf0f1" }}>WELCOME TO</h6>
        <h2 style={{ color: "#badc58" }}>
          Enhanced
          <span style={{ color: "#ecf0f1" }}>Farmers</span>
        </h2>
        <p style={{ color: "#ecf0f1", fontFamily: "'Barlow', sans-serif" }}>
          As a company that focuses so much on improving farmers and their
          produce, we have all the solutions that match your needs.
        </p>
      </div>
      <div>
        <Link to="/farmers/register" className="btn btn-primary additions">
          Join Us As A Farmer
        </Link>
      </div>
    </div>
    <div className="header">
      <h1>Our Investors!</h1>

    </div>
    <div className="investors">
      <div className="logo">
        <img
          src={require("../../images/andela.png")}
          alt="../../images/andela.png"
        />
      </div>
      <div className="logo">
        <img
          src={require("../../images/SDG.jpg")}
          alt="../../images/andela.png"
        />
      </div>
      <div className="logo">
        <img
          src={require("../../images/facebook.png")}
          alt="../../images/andela.png"
        />
      </div>

      <div className="logo">
        <img
          src={require("../../images/facebook.png")}
          alt="../../images/andela.png"
        />
      </div>
    </div>
  </div>
);

export default HomePage;
