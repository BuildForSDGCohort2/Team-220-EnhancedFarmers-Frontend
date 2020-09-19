import jwtDecode from "jwt-decode";
import http from "./httpServices";
import { url } from "../config.json";

export async function loginProfessional(email, password) {
  const loginUrl = `${url}/professionals/login`;
  const { data } = await http.post(loginUrl, { email, password });
  const { token: jwt } = data;
  localStorage.setItem("token", jwt);
}

export async function loginInvestors(email, password) {
  const loginUrl = `${url}/investors/login`;
  const { data } = await http.post(loginUrl, { email, password });
  const { token: jwt } = data;

  localStorage.setItem("token", jwt);
}

export async function loginFarmer(email, password) {
  const loginUrl = `${url}/farmers/login`;
  const { data } = await http.post(loginUrl, { email, password });
  const { token: jwt } = data;

  localStorage.setItem("token", jwt);
}

function loginWithJwt(jwt) {
  localStorage.setItem("token", jwt);
}

export function logOut() {
  localStorage.removeItem("token");
}

function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    return user;
  } catch (er) {
    return null;
  }
}

function getJwt() {
  return localStorage.getItem("token");
}

http.setJwt(getJwt());

export default {
//   loginUser,
  loginWithJwt,
  logOut,
  getCurrentUser,
  getJwt
};
