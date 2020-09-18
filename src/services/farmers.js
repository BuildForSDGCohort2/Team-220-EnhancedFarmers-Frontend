import https from "./httpServices";
import { url } from "../config.json";

const farmerUrl = `${url}/farmers`;

export const createFarmer = (farmer, image) => {
  const createUrl = `${farmerUrl}/signup`;

  const data = new FormData();

  for (const k in farmer) {
    data.append(k, farmer[k]);
  }

  data.append("image", image);

  return https.post(createUrl, data);
};

export const approveFarmer = (farmerId, isAdmin) => {
  const updateUrl = `${farmerUrl}/${farmerId}/approve`;

  return https.patch(updateUrl, isAdmin);
};

export const getAllFarmers = () => https.get(farmerUrl);

export const deleteFarmer = (farmerId) => https.delete(`${farmerUrl}/${farmerId}`);
