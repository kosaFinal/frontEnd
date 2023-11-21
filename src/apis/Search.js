import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

export function filterSearch(filterData) {
  return axios.post("/user/search", filterData);
}
export function searchRelative(word) {
  return axios.get(`/user/search/relative/${word}`);
}
export function locationSearch(x, y) {
  return axios.get(`/user/search/near/mylocation?x=${x}&y=${y}`);
}
