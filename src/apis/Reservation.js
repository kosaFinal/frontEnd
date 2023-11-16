import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/user/reservation";

export function readTableList() {
  return axios.get("/cafe/22");
}
