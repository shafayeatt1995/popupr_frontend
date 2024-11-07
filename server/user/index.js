import apiFetch from "../apiFetch";

export async function generatePaymentUrl(body) {
  return apiFetch.post(`/user/generate-payment-url`, body);
}

export * from "./domain";
// export * from "./code";
