import axios from "axios";

axios.defaults.baseURL = "https://jieunyes.shop/api";

export function addAuthHeader(accessToken) {
  axios.defaults.headers.common["Authorization"] = "Bearer "+accessToken;
}

export function removeAuthHeader() {
  delete axios.defaults.headers.common["Authorization"];
}
