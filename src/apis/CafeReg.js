import axios from "axios";

axios.defaults.baseURL = "http://27.96.134.5:8080";

export function managerCafeReg(formData) {
    return axios.post("/manager/cafe/register", formData);
  }