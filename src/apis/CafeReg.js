import axios from "axios";

axios.defaults.baseURL = "https://jieunyes.shop/api";

export function managerCafeReg(formData) {
    return axios.post("/manager/cafe/register", formData);
  }