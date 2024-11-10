import { initializePaddle } from "@paddle/paddle-js";
let paddleInstance = null;

const init = async () => {
  if (paddleInstance) return paddleInstance;
  paddleInstance = await initializePaddle({
    environment: process.env.NEXT_PUBLIC_PADDLE_ENVIRONMENT,
    token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
  });

  return paddleInstance;
};

export async function openCheckout({
  priceId,
  email,
  discountId,
  customData = {},
}) {
  const paddle = await init();

  const payload = {
    items: [{ priceId, quantity: 1 }],
    customer: { email },
    settings: {
      allowedPaymentMethods: [
        "alipay",
        "apple_pay",
        "bancontact",
        "google_pay",
        "ideal",
        "paypal",
        "card",
      ],
      displayMode: "overlay",
      successUrl: "http://localhost:8080/payment-success",
    },
    customData,
  };
  if (discountId) payload.discountId = discountId;
  paddle?.Checkout.open(payload);
}
