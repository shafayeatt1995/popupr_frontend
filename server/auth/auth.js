import apiFetch from "../apiFetch";

export async function apiLogin(body) {
  return apiFetch.post(`/auth/login`, body);
}
