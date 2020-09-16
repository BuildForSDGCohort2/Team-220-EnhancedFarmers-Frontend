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

export const getAllfarmers = () => https.get(farmerUrl);

export const deletefarmer = (farmerId) => https.delete(`${farmerUrl}/${farmerId}`);
