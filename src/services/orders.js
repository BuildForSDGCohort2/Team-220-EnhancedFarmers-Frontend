import https from "./httpServices";
import { url } from "../config.json";

const orderUrl = `${url}/farmers`;

export const createFarmer = (farmer) => {
  const createUrl = `${orderUrl}/signup`;

  return https.post(createUrl, farmer);
};

export const approveFarmer = (farmerId, isAdmin) => {
  const updateUrl = `${orderUrl}/${farmerId}/approve`;

  return https.patch(updateUrl, isAdmin);
};

export const getAllOrdersByCustomer = (customerId) => {
  const customerUrl = `${orderUrl}/${customerId}/customer`;

  return https.get(customerUrl);
};
export const getAllFarmers = () => https.get(orderUrl);

export const deleteFarmer = (farmerId) =>
  https.delete(`${orderUrl}/${farmerId}`);
