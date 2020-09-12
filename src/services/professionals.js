/* eslint-disable guard-for-in */
import https from "./httpServices";
import { url } from "../config.json";

const proUrl = `${url}/professionals`;

export const createAProfessional = (professional, image) => {
  const createUrl = `${proUrl}/signup`;
  const data = new FormData();

  for (const k in professional) {
    data.append(k, professional[k]);
  }

  data.append("image", image);

  return https.post(createUrl, data);
};

export const getAllProfessionals = () => {
  const professionals = https.get(proUrl);
  return professionals;
};

export const getSingleProfessional = (proId) => https.get(`${proUrl}/${proId}`);
export const deleteProfessional = (proId) => https.delete(`${proUrl}/${proId}`);
