import { initializePaddle } from "@paddle/paddle-js";
let paddle = null;

const init = async () => {
  const paddleInstance = await initializePaddle({
    environment: process.env.NEXT_PUBLIC_PADDLE_ENVIRONMENT,
    token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
  });

  if (paddleInstance) paddle = paddleInstance;
};

export async function openCheckout({ priceId, id, email, customData = {} }) {
  if (!paddle) await init();

  paddle?.Checkout.open({
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
    discountId: "dsc_01jc11amp84cjmpbtnm06f1fnn",
    // customData,
  });
}
