import axios from "axios";

axios.defaults.baseURL = "http://27.96.134.5:8080";

export function checkPassword(password) {
  return axios.post("/user/check/password", { password });
}
export function updatePassword() {
  return axios.patch("/user/update/password", { password: "password" });
}
