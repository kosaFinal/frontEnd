import axios from "axios";


axios.defaults.baseURL = "http://27.96.134.5:8080";

export function login(user) {
  return axios.post("/login", user);
}

export function signup(user) {
  return axios.post("/signup", user);
}

export function idCheck(id) {
  console.log("id: "+ id);
  return axios.get(`/check/userName/dup/${id}`);
}