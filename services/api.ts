import axios from "axios";

const API_URL = "https://bigi-backend.onrender.com/api/orders";

export const createOrder = async (order: any) => {
    return axios.post(`${API_URL}`, order);
};

