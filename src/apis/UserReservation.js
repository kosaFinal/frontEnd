import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

export function readTableList() {
  return axios.get("/user/reservation/cafe/187");
}
export function readReservationTime() {
  return axios.get("/user/reservation/time/20231114/42");
}
export function createReservation(reservationData) {
  return axios.post("user/reservation/register", reservationData);
}
export function reservationNow() {
  return axios.get("/user/reservation/now");
}
export function reservationCancle() {
  return axios.get("/user/reservation/now/cancle/81");
}
export function reservationProgress() {
  return axios.get("/user/reservation/list/state");
}
export function reservationFinish() {
  return axios.get("/user/reservation/list/finish");
}
