import React from "react";
import Image from "../../images/Spinach.jpg";

const HomePage = () => {
  return (
    <div
      class="container-fluid"
      style={{
        padding: "auto",
        fontFamily: "'Barlow', sans-serif",
        backgroundcolor: "#dff9fb",
      }}
    >
      <div
        class="upper"
        style={{
          diplay: "flex",
          flexdirection: "row",
          flexwrap: "nowrap",
          justifycontent: "flex-start",
          borderbottom: "1px dotted #d35400",
          backgroundColor: "#535c68",
        }}
      >
        <div
          class="headers"
          style={{
            flex: 2,
            padding: "2em 1em",
            marginBottom: "auto",
          }}
        >
          <h6 style={{ color: "#ecf0f1" }}>WELCOME TO</h6>
          <h2 style={{ color: "#badc58" }}>
            ENHANCED <span style={{ color: "#ecf0f1" }}>farmers</span>
          </h2>
          <p style={{ color: "#ecf0f1" }}>
            An organisation focused on improving farmers
          </p>
        </div>
      </div>
      <div class="second" style={{ flex: 2 }}>
        <img
          src={Image}
          class="img-fluid"
          alt=""
          style={{ height: "20em", width: "100%" }}
        />
      </div>
      <div class="brief-details" style={{ backgroundColor: "#dff9fb" }}>
        <h2 style={{ color: "green", fontweight: "bold" }}>Enhanced farmers</h2>
        <p></p>
      </div>
    </div>
  );
};

export default HomePage;
