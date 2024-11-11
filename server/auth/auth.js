import apiFetch from "../apiFetch";

export async function apiLogin(body) {
  return apiFetch.post(`/auth/login`, body);
}
export async function apiRefreshToken() {
  return apiFetch.get(`/auth/refresh-token`);
}
