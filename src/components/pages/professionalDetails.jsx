import React, { useState, useEffect } from "react";

import { url } from "../../config.json";
import Table from "../reUsableComponents/table";
import { getSingleProfessional } from "../../services/professionals";
import { getProjectsByAProfessional } from "../../services/projects";

import "./pageStyles/detail.css";

const ProfessionalDetails = (props) => {
  const [professional, setProfessional] = useState({});
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const proId = props.match.params.id;
    const getPro = async () => {
      const { data } = await getSingleProfessional(proId);
      setProfessional(data.data);
    };

    const getProjects = async () => {
      const { data } = await getProjectsByAProfessional(proId);
      setProjects(data.data);
    };
    getProjects();

    getPro();
  }, []);

  const columns = [
    { path: "Farmer", label: "Farmer" },
    { path: "Professional", label: "Professional" },
    { path: "Investor", label: "Investor" },
    { path: "InvestedAmount", label: "Min Amount" },
    { path: "MaxAmountToInvest", label: "Max Amount" },
    { path: "funding", label: "Needs Funding" },
    { path: "harvestPeriod", label: "Expected End Date" },
  ];

  const {
    email,
    fname,
    lname,
    profession,
    contact,
    residence,
    imageUrl,
  } = professional;

  console.log(projects);
  return (
    <div className="container detail bg-light">
      <div className="image">
        <img src={`${url}/uploads/${imageUrl}`} alt="professional" />
      </div>
      <h2>Everything about the Professional</h2>
      <div className="col-5">
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
      </div>
      <div />

      <div className="tabledata">
        {!projects.length ? (
          <h4>No projects Mr/Mrs {lname} Is Working on</h4>
        ) : (
          <>
            <h3> Projects By {fname}</h3>

            <Table data={projects} columns={columns} />
          </>
        )}
      </div>
    </div>
  );
};

export default ProfessionalDetails;
