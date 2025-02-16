import instanceLogin from "./configLogin";

async function login(account) {
  const res = await instanceLogin.post(`/login`, account);
  return res.data;
}
async function profile() {
  const res = await instanceLogin.get(`/me`);
  return res.data;
}
export { login, profile };
