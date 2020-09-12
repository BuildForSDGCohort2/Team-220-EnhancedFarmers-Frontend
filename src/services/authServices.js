import jwtDecode from "jwt-decode";
import http from "./httpServices";
// import { url } from "../../config.json";

// export async function loginUser(email, password) {
//   const { data: jwt } = await http.post(authUrl, { email, password });
//   localStorage.setItem("token", jwt);
// }
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
