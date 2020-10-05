import https from "./httpServices";
import { url } from "../config.json";

const orderUrl = `${url}/orders`;

export const createOrder = (order) => {
  const createUrl = `${orderUrl}/`;

  return https.post(createUrl, order);
};

export const adminChangeStaus = (orderId, status) => {
  const updateUrl = `${orderUrl}/${orderId}/status`;

  return https.patch(updateUrl, status);
};

export const adminChangeBidPrice = (orderId, price) => {
  const updateUrl = `${orderUrl}/${orderId}/price`;

  return https.patch(updateUrl, price);
};

export const getAllOrdersByCustomer = (customerId) => {
  const customerUrl = `${orderUrl}/${customerId}/customer`;

  return https.get(customerUrl);
};

export const getAllPendingOrders = () => https.get(`${orderUrl}/pending`);

export const fetchAllOrders = () => https.get(orderUrl);

export const deleteOrder = (orderId) => https.delete(`${orderUrl}/${orderId}`);
