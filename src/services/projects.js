import https from "./httpServices";
import { url } from "../config.json";

const proUrl = `${url}/projects`;

export const createAproject = (project) => {
  const createUrl = proUrl + "/create";

  return https.post(createUrl, project);
};

export const getAllProjects = () => https.get(proUrl);

// export const getSingleproject = (proId) => https.get(`${proUrl}/${proId}`);
export const deleteProject = (proId) => https.delete(`${proUrl}/${proId}`);

export const getProjectsByAProfessional = (professionalId) => {
  const professionalUrl = `${proUrl}/${professionalId}/professional`;

  return https.get(professionalUrl);
};
