import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

/* Basic 업데이트 */
export function managerBasicRead() {
    return axios.get("/manager/cafe/basic");
  }
  export function managerBasicCafeTelUpdate(updatedPhone) {
    return axios.patch("/manager/cafe/edit/tel", { cafeTel: updatedPhone });
}
export function managerBasicCafeAddressUpdate(updatedAddress) {
    return axios.patch("/manager/cafe/edit/location", updatedAddress);
  }

  /* Details 업데이트 */
  export function managerDetailRead() {
    return axios.get("/manager/cafe/details");
  }
  export function managerDetailCafeTieUpdate(updatedTime) {
    return axios.patch("/manager/cafe/edit/time", updatedTime);
  }

/* Setting 업데이트 */
  export function managerSettingRead() {
    return axios.get("/manager/cafe/setting");
  }