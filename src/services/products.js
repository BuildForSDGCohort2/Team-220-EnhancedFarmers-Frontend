import https from "./httpServices";
import { url } from "../config.json";

const productsUrl = `${url}/products`;

export const createAproduct = (product, image) => {
  const data = new FormData();

  for (const k in product) {
    data.append(k, product[k]);
  }

  data.append("image", image);

  return https.post(productsUrl, data);
};

export const getAllProducts = () => https.get(productsUrl);

export const getSingleProduct = (itemId) =>
  https.get(`${productsUrl}/${itemId}`);

export const getProductsByCatory = (category) =>
  https.get(`${productsUrl}/category?category=${category}`);

export const deleteProduct = (itemId) =>
  https.delete(`${productsUrl}/${itemId}`);
