import https from "./httpServices";
import { url } from "../config.json";

const customerUrl = `${url}/customers`;

export const customerSignup = (customer, image) => {
  const data = new FormData();

  for (const k in customer) {
    data.append(k, customer[k]);
  }

  data.append("image", image);

  return https.post(customerUrl, data);
};

export const changePassword = (data) => {
  const passwordUrl = `${customerUrl}/password`;
  return https.patch(passwordUrl, data);
};

export const getAllCustomers = () => https.get(customerUrl);

export const getSingleCustomer = (customerId) => {
  return https.get(`${customerUrl}/${customerId}`);
};

export const updateImage = (image) => {
  const data = new FormData();

  data.append("image", image);

  const imageUrl = `${customerUrl}/image`;

  return https.patch(imageUrl, data);
};

export const deleteCustomer = (customerId) =>
  https.delete(`${customerUrl}/${customerId}`);
