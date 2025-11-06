// src/components/PlaceOrderButton.tsx 
import React, { useState } from 'react'; 
import { submitOrderToFormspree, submitOrderToServer, Order } from '../services/orderServices';



/** 
* PlaceOrderButton 
* - Reads cart from localStorage key "bigi_cart" by default (array of product objects).
 * - Renders a small checkout form for name/email/phone/address. 
* - On submit, sends one order with all cart items. 
* 
* Usage: 
* - <PlaceOrderButton /> // reads localStorage cart 
* - OR <PlaceOrderButton cart={myCartArray} /> // pass cart directly
 */ 

type Props = { 
   cart?: Array<any>; // optional: array of product items (id,name,price,qty) 
   onSuccess?: (response: any) => void; onError?: (err: any) => void; 
}; 


export default function PlaceOrderButton({ cart: cartProp, onSuccess, onError }: Props) { 
const [name, setName] = useState(''); 
const [phone, setPhone] = useState(''); 
const [email, setEmail] = useState(''); 
const [address, setAddress] = useState(''); 
const [loading, setLoading] = useState(false); 

function getCart() { 
    if (Array.isArray(cartProp)) return cartProp; 
    try { const raw = localStorage.getItem('bigi_cart'); 
    if (!raw) return []; 
    const parsed = JSON.parse(raw); 
    if (Array.isArray(parsed)) return parsed; 
    return []; 
  } catch (e) { 
    console.error('Error reading cart from localStorage', e); 
    return []; 
    } 
  } 

function calculateTotal(items: any[]) { 
   return items.reduce((s, it) => { 
   const price = Number(it.price ?? it.amount ?? 0); 
   const qty = Number(it.qty ?? it.quantity ?? 1); 
   return s + price * qty; 
   }, 0); 
 } 

function buildOrder(items: any[]): Order { 
   const normalizedItems = items.map((p) => ({ 
   productId: p.id ?? p._id ?? p.sku ?? p.slug ?? p.name, 
   name: p.name, 
   price: Number(p.price ?? p.amount ?? 0), 
   qty: Number(p.qty ?? p.quantity ?? 1), 
  })); 
  const total = calculateTotal(normalizedItems); 
  return {
   items: normalizedItems, 
   customer: {
      name, 
      phone, 
      email, 
      address, 
     }, 
    payment: { method: 'COD', status: 'pending' }, 
    total, 
    createdAt: new Date().toISOString(), 
  }; 
} 

async function handlePlaceOrder(e?: React.FormEvent) { 
  if (e) e.preventDefault(); 
 const items = getCart(); 
 if (!items || items.length === 0) { 
   alert('Your cart is empty.'); 
   return; } if (!name && !phone && !email) { 
  // minimal validation 
  if (!confirm('You did not enter contact details. Are you sure you want to place order?')) return; 
} 
  const order = buildOrder(items); setLoading(true); 

  try { 
    const USE_FORMSPREE = (process.env.VITE_USE_FORMSPREE || 'true') === 'true';
    if (USE_FORMSPREE) { 
    await submitOrderToFormspree(order); 
   // Optionally clear cart: 
  // localStorage.removeItem('bigi_cart'); 
  setLoading(false); 
  alert('Order submitted — we will contact you. Thank you!'); 
   if (onSuccess) onSuccess({ ok: true }); 
    } 
   else { 
    const result = await submitOrderToServer(order); 
    setLoading(false); 
    alert('Order recorded. Order id: ' + (result.id || result.insertedId)); 
  if (onSuccess) onSuccess(result); 
   // clear local cart after successful server order 
  
  localStorage.removeItem('bigi_cart'); 
  } 
 } catch (err) { 
   console.error('Place order failed', err);
   setLoading(false); 
   alert('Failed to place order. Please try again or contact us.'); 
  if (onError) onError(err); 
 } 
} 
 
 // Small inline checkout UI (you can style or move to a dedicated page) 
  return ( 
<div className="place-order-wrapper"> 
<form onSubmit={handlePlaceOrder}> 
   <div style={{ marginBottom: 8 }}> 
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name (optional)" /> 
   </div> 
   <div style={{ marginBottom: 8 }}> 
    <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone (optional)" /> 
   </div> 
   <div style={{ marginBottom: 8 }}> 
     <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email (optional)" /> 
   </div> 
   <div style={{ marginBottom: 8 }}> 
     <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address (optional)" /> 
   </div> 
   <div style={{ marginBottom: 12 }}> 
     <small> 
          Items in cart: <strong>{getCart().length}</strong> &nbsp; 
          Total: <strong>KES {calculateTotal(getCart()).toFixed(2)}</strong> 
     </small> 
   </div> 
 
   <button type="submit" disabled={loading}> 
      {loading ? 'Placing order...' : 'Place Order'} 
   </button> 
</form> 
</div> ); 
}