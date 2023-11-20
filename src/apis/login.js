import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

export function checkPassword(password) {
  return axios.post("/user/check/password", { password });
}
export function updatePassword(data) {
  return axios.patch("/user/update/password", { data });
}

export function login(user) {
  return axios.post("/login", user);
}
