
export function login(user) {
  return axios.post("/login", user);
}
