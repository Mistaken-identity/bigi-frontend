import axios from "axios";

const API_URL = "http://localhost:5000/api/orders";

export const createOrder = async (orderData: any) => {
    return axios.post(`${API_URL}/orders`, orderData);
};