import axios from "axios";

 const API = axios.create({ 
  baseURL: "https://bigi-backend.onrender.com", 
  headers: { 
    "Content-Type": "application/json", 
  }, 
}); 

export const createOrder = (orderData: any) => { 
  return API.post("/orders", orderData); 
};