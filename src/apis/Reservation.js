import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

export function readTableList() {
  return axios.get("/user/reservation/cafe/187");
}
export function readReservationTime() {
  return axios.get("/user/reservation/time/20221114/42");
}
