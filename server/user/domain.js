import apiFetch from "../apiFetch";

export async function fetchSingleDomain(params) {
  return apiFetch.get(`/user/domain/single`, params);
}

export async function fetchDomain(params) {
  return apiFetch.get(`/user/domain`, params);
}

export async function addDomain(body) {
  return apiFetch.post(`/user/domain`, body);
}

export async function updateTimer(body) {
  return apiFetch.put(`/user/domain/timer`, body);
}

export async function updateMessage(formData) {
  return apiFetch.put(`/user/domain/message`, null, formData);
}

export async function deleteDomain(params) {
  return apiFetch.delete(`/user/domain`, params);
}
