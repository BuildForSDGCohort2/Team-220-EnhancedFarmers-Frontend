import https from "./httpServices";
import { url } from "../config.json";

const proUrl = `${url}/projects`;

export const createAproject = (project) => {
  const data = new FormData();

  for (const k in project) {
    data.append(k, project[k]);
  }

  return https.post(proUrl, data);
};

export const getAllProjects = () => {
  const projects = https.get(proUrl);
  return projects;
};

// export const getSingleproject = (proId) => https.get(`${proUrl}/${proId}`);
// export const deleteproject = (proId) => https.delete(`${proUrl}/${proId}`);
