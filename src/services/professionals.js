import https from "./httpServices";
import { url } from "../config.json";

const proUrl = `${url}/professionals`;

export const createAProfessional = (professional) => {
  const createUrl = `${proUrl}/signup`;
  const data = new FormData();

  const proData = {
    email: professional.email,
    fname: professional.fname,
    lname: professional.lname,
    contact: professional.contact,
    residence: professional.residence,
    profession: professional.profession,
    password: professional.password,
  };
  data.append("data", JSON.stringify(proData));
  // data.append("image", image);
  console.log(data.get("data"));
  // console.log(data.get("image"));
  return https.post(createUrl, data);
};
