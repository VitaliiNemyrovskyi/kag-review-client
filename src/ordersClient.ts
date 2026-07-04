const token = localStorage.getItem("accessToken");

export async function listOrders() {
  const res = await fetch("/api/orders", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}
