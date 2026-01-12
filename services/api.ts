import axios from "axios";

/**
 * Backend base URL (Render)
 */
const BASE_URL = "https://bigi-backend.onrender.com";

/**
 * Create order (checkout)
 */
export const createOrder = async (order: any) => {
  const response = await axios.post(
    `${BASE_URL}/api/orders`,
    order,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  return response.data;
};