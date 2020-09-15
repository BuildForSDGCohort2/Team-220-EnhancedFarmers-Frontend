import https from "./httpServices";
import { url } from "../config.json";

const investorUrl = `${url}/investors`;

export const createInvestor = (investor, image) => {
  const createUrl = `${investorUrl}/register`;

  const data = new FormData();

  for (const k in investor) {
    data.append(k, investor[k]);
  }

  data.append("image", image);

  const response = https.post(createUrl, data);
  console.log(response);
  return response;
};

export const getAllInvestors = () => https.get(investorUrl);

export const deleteInvestor = (investorId) => https.delete(`${investorUrl}/${investorId}`);
