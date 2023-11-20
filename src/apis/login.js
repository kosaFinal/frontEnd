import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

export function checkPassword(password) {
  return axios.post("/user/check/password", { password });
}
export function updatePassword() {
  return axios.patch("/user/update/password", { password: "password" });
}

export function login(user) {
  return axios.post("/login", user);
}

export function signup(user) {
  return axios.post("/signup", user);
}

export function idCheck(id) {
  return axios.get(`/check/userName/dup/${id}`);
}