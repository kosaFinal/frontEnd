import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

export function login(user) {
  return axios.post("/login", user);
}
