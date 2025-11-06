export type OrderItem = {
  productId: string;
  name: string;
  price: number;
  qty: number;
};

export type Customer = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
};

export type Order = {
  items: OrderItem[];
  customer: Customer;
  payment?: { method: string; status?: string; providerRef?: string };
  total: number;
  createdAt?: string;
};

export async function submitOrderToFormspree(order: Order) {
  const endpoint = (process.env.VITE_FORMSPREE_ENDPOINT as string) || '';
  if (!endpoint) {
    throw new Error('Formspree endpoint not configured (VITE_FORMSPREE_ENDPOINT).');
  }
  const payload = { createdAt: new Date().toISOString(), order };
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Formspree error: ${res.status} ${text}`);
  }
  return true;
}

export async function submitOrderToServer(order: Order) {
  const res = await fetch('/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Server order error: ${res.status} ${text}`);
  }
  return res.json();
}