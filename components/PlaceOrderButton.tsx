
import React, { useState } from 'react'; 
import { createOrder } from '../services/api';

type Order = {
  items: Array<{
    productId: string;
    name: string;
    price: number;
    qty: number;
  }>;
  customer: {
    name: string;
    phone: string;
    email: string;
    address: string;
  };
  payment: {
    method: string;
    status: string;
  };
  total: number;
  createdAt: string;
};


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
   onSuccess?: (response: any) => void; 
   onError?: (err: any) => void; 
}; 


export default function PlaceOrderButton({ cart: cartProp, onSuccess, onError }: Props) { 
const [name, setName] = useState(''); 
const [phone, setPhone] = useState(''); 
const [email, setEmail] = useState(''); 
const [address, setAddress] = useState(''); 
const [loading, setLoading] = useState(false); 

function getCart() { 
    if (Array.isArray(cartProp)) return cartProp; 
    try { 
        const raw = localStorage.getItem('bigi_cart'); 
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
        return; 
    } 
    if (!name && !phone && !email) { 
        // minimal validation 
        if (!confirm('You did not enter contact details. Are you sure you want to place order?')) return; 
    } 
   const order = buildOrder(items); 
   setLoading(true); 
   
   try { 
    const res = await createOrder(order); 
     console.log("Order response:", res.data); 
     alert("Order placed successfully"); 
     
     onSuccess?.(res.data); 
     
      } catch (error: any) { 
        console.error("Order error:", error.response?.data || error.message); 
        alert(error.response?.data?.message || "Failed to place order"); 
        onError?.(error); 
    } finally { 
        setLoading(false); 
    } 
} 
 
// Small inline checkout UI (you can style or move to a dedicated page) 
return ( 
    <div className="place-order-wrapper"> 
        <form onSubmit={handlePlaceOrder}> 
            <div style={{ marginBottom: 8 }}> 
                <input 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Name (optional)" 
                    style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                /> 
            </div> 
            <div style={{ marginBottom: 8 }}> 
                <input 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    placeholder="Phone (optional)" 
                    style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                /> 
            </div> 
            <div style={{ marginBottom: 8 }}> 
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email (optional)" 
                    style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                /> 
            </div> 
            <div style={{ marginBottom: 8 }}> 
                <input 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                    placeholder="Address (optional)" 
                    style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                /> 
            </div> 
            <div style={{ marginBottom: 12 }}> 
                <small> 
                    Items in cart: <strong>{getCart().length}</strong> &nbsp; 
                    Total: <strong>KES {calculateTotal(getCart()).toFixed(2)}</strong> 
                </small> 
            </div> 

            <button 
               className="PlaceOrderButton"
                type="submit" 
                disabled={loading}
                style={{ 
                    width: '100%', 
                    padding: '12px', 
                    backgroundColor: loading ? '#ccc' : '#f97316', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: loading ? 'not-allowed' : 'pointer',
                    fontWeight: 'bold'
                }}
            > 
                {loading ? 'Placing order...' : 'Place Order'} 
            </button> 
        </form> 
    </div> 
); 
}

