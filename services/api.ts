/// <reference types="vite/client" />

interface ApiResponse<T> {
  ok: boolean;
  data?: T;
  error?: string;
}

const API_BASE_URL = import.meta.env.VITE_API_URL;
/**
 * A wrapper for async operations to provide timeout and standardized error handling.
 * @param operation
 * @param timeout 
 * @returns A promise that resolves to an ApiResponse object.
 */
export async function apiFetch<T>(
  operation: () => Promise<T>,
  timeout = 10000
): Promise<ApiResponse<T>> {
  try {
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('Request timed out')), timeout)
    );

    const data = await Promise.race([operation(), timeoutPromise]);
    
    return { ok: true, data };
  } catch (error: any) {
    console.error('API Fetch Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return { ok: false, error: errorMessage };
  }
}


const BASE_URL = import.meta.env.VITE_API_URL || 'https://bigi-backend.onrender.com';

export interface OrderData {
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
}

export async function createOrder(orderData: OrderData) { 
  return apiFetch(async () => {
     const res = await fetch(`${BASE_URL}/orders`, {
       method: 'POST', 
       headers: { 'Content-Type': 'application/json' }, 
       body: JSON.stringify(orderData), 
      }); 
      
      if (!res.ok) {
         throw new Error('Failed to place order'); 
        } 

        return res.json(); 
      }); 
    }
