import axios from "axios";

/** * Generic API response type */ 

export interface ApiResponse<T> { 
  ok: boolean; 
  data?: T; 
  error?: string; 
} 
/** * Axios instance (used for backend orders) */ 

const API = axios.create({ 
  baseURL: "https://bigi-backend.onrender.com", 
  headers: {
     "Content-Type": "application/json", 
    }, 
  }); 
  
  /** * apiFetch — used by geminiService and others */ 
  
  export async function apiFetch<T>( 
    operation: () => Promise<T>, 
    timeout = 10000 
  ): Promise<ApiResponse<T>> { 
    try { 
      const timeoutPromise = new Promise<never>((_, reject) => 
        setTimeout(() => reject(new Error("Request timed out")), timeout) 
    ); 

    const data = await Promise.race([operation(), timeoutPromise]); 
    return { ok: true, data }; 
  } catch (error: any) { 
    console.error("API Fetch Error:", error); 
    return { 
      ok: false, 
      error: error?.message || "Unknown error", 
    }; 
  } 
}

/** * Create order (used by Cart / Checkout) */ 

export const createOrder = (orderData: any) => { 
  return API.post("/orders", orderData); 
};