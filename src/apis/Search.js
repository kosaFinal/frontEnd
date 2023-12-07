import axios from "axios";
import qs from "qs";


axios.defaults.baseURL = "https://jieunyes.shop/api";

export function filterSearch(filterData, pageNo = 1) {
  const queryString = qs.stringify(filterData, {
    arrayFormat: "repeat",
  });

  return axios.get(`https://jieunyes.shop/api/user/search?${queryString}`);
}

export function locationSearch(x, y) {
  return axios.get(`/user/search/near/mylocation?x=${x}&y=${y}`);
}
export function cafeInfo(cafeId) {
  console.log("cafeId:", cafeId);

  return axios.get(`/user/cafe/${cafeId}`);
}
