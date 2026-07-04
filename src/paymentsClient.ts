// Client for the payments service.
export interface PaymentPayload {
  orderId: number;
  amountCents: number;
  currency: string;
}

export async function chargePayment(payload: PaymentPayload) {
  const res = await fetch("/api/payments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}
