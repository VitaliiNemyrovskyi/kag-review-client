const token = localStorage.getItem("accessToken");

export async function listOrders() {
  const res = await fetch("/api/orders", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

export async function createOrder(payload: any) {
  const res = await fetch("/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}
