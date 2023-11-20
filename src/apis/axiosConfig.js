import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
// const accessToken =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDAyNjMwNDUsInVzZXJOYW1lIjoidXNlcjIifQ.6qB7rNpSyK9nPfdvjc4iQZOjyus7ygSzyQcLkid3F3M";
export function addAuthHeader() {
  axios.defaults.headers.common["Authorization"] =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDA0ODU0NjYsInVzZXJOYW1lIjoibWFuYWdlcjEifQ.daRDSUne6jV9Nvu9wd0aIrnj2yXB0IDzhs3TM9R2mUg";
  // console.log("토큰 :", accessToken);
}

export function removeAuthHeader() {
  delete axios.defaults.headers.common["Authorization"];
}
