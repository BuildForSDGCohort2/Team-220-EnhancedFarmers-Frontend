import React, { useState, useEffect } from "react";

import { getSingleProfessional } from "../../services/professionals";

import "./pageStyles/detail.css";

const ProfessionalDetails = (props) => {
  const [professional, setProfessional] = useState({});

  useEffect(() => {
    const getPro = async () => {
      const proId = props.match.params.id;
      const { data } = await getSingleProfessional(proId);
      setProfessional(data.data);
    };
    getPro();
  }, []);

  const { email, fname, lname, profession, contact, residence } = professional;
  console.log(email, fname);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="card">
            <img
              src={require("../../images/pic.jpg")}
              className="card-img-top img-fluid"
              alt="professional"
            />
          </div>
        </div>
        <div className="col-md-7 color">
          <h1>Everything about the Professional</h1>
          <div className="container attributes">
            <dl className="row">
              <dt className="col">Email</dt>
              <dd className="col">{email}</dd>
            </dl>
            <dl className="row">
              <dt className="col">Firstname</dt>
              <dd className="col">{fname}</dd>
            </dl>
            <dl className="row">
              <dt className="col">Lastname</dt>
              <dd className="col">{lname}</dd>
            </dl>

            <dl className="row">
              <dt className="col">Contact</dt>
              <dd className="col">{contact}</dd>
            </dl>
            <dl className="row">
              <dt className="col">Residence</dt>
              <dd className="col">{residence}</dd>
            </dl>
            <dl className="row">
              <dt className="col">Expertise</dt>
              <dd className="col">{profession}</dd>
            </dl>
            <div />
          </div>
          {/* add the projects here workes on */}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetails;
