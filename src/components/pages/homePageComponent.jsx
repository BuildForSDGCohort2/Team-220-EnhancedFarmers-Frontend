import React from "react";
import Image from "../../images/Spinach.jpg";
import bannerImage from "../../images/ginger.jpg";
import newImage from "../../images/2.jpg";
import sdg from "../../images/SDG.jpg";
import andela from "../../images/andela.png";

const HomePage = () => {
  return (
    <div
      class="container-fluid"
      style={{
        fontFamily: "'Barlow', sans-serif",
        backgroundcolor: "red",
      }}
    >
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src={bannerImage}
              alt={bannerImage}
              style={{ height: "20em", filter: "brightness(60%)" }}
            />

            <div class="carousel-caption d-none d-md-block">
              <h2 style={{}}>
                Are you a new farmer with land and looking for finances to
                start!
              </h2>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={bannerImage}
              alt={bannerImage}
              style={{ height: "20em", filter: "brightness(60%)" }}
            />

            <div class="carousel-caption d-none d-md-block">
              <h2>
                Are you a farmer who needs to sell your produce and you have no
                access to the market!
              </h2>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={Image}
              alt="Third slide"
              style={{ height: "20em", filter: "brightness(60%)" }}
            />

            <div class="carousel-caption d-none d-md-block">
              <h2>
                Are you an investor looking for investment opportunities in
                agriculture!
              </h2>
            </div>
          </div>

          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={Image}
              alt="Third slide"
              style={{ height: "20em", filter: "brightness(60%)" }}
            />

            <div class="carousel-caption d-none d-md-block">
              <h2>
                OR Are you a buyer looking for organic or non organic produce!
              </h2>
              <p>...</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="upper"
        style={{
          margin: "10px 0",
          display: "flex",
          flexdirection: "row",
          flexwrap: "nowrap",
          justifycontent: "flex-start",
          backgroundColor: "#535c68",
        }}
      >
        <div
          class="headers"
          style={{
            flex: 3,
            padding: "2em 1em",
            marginBottom: "auto",
          }}
        >
          <h6 style={{ color: "#ecf0f1" }}>WELCOME TO</h6>
          <h2 style={{ color: "#badc58" }}>
            ENHANCED <span style={{ color: "#ecf0f1" }}>farmers</span>
          </h2>
          <p style={{ color: "#ecf0f1", fontFamily: "'Barlow', sans-serif" }}>
            As a company that focuses so much on improving farmers and their
            produce, we have all the solutions that match your needs.
          </p>
        </div>
        <div
          class="logo"
          style={{
            flex: "1",
          }}
        >
          <button
            type="button"
            class="btn btn-primary"
            style={{
              textAlign: "center",
              margin: "60px",
            }}
          >
            SignUp
          </button>
        </div>
      </div>
      <div class="container text-center">
        <div class="row">
          <div class="col-sm-4">
            <img
              src={newImage}
              class="img-responsive"
              style={{ width: "100%" }}
              alt={newImage}
            />
            <p>Current Project</p>
          </div>
          <div class="col-sm-4">
            <img
              src={newImage}
              class="img-responsive"
              style={{ width: "100%" }}
              alt={newImage}
            />
            <p>Project 2</p>
          </div>
          <div class="col-sm-4" style={{}}>
            <div class="well" style={{ paddingTop: "20px" }}>
              <h5 style={{ color: "#0652DD" }}>In partnership with </h5>
              <img
                src={sdg}
                class="img-responsive"
                alt={sdg}
                style={{
                  width: "7em",
                  margin: "1em",
                  borderRadius: "10PX",
                  border: "1px solid blue",
                }}
              />
              <img
                src={andela}
                class="img-responsive"
                alt={andela}
                style={{
                  width: "6.5em",
                  color: "white",
                  margin: "1em",
                  border: "1px solid blue",
                  borderRadius: "10PX",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
