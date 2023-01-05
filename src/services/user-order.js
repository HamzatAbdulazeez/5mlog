import axios from "axios";
import authHeader from "./auth-header";

const pickupOrder = () => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/get/pickup/service`,  { headers: authHeader() });
};
const interstateOrder = () => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/get/inter-state/service`,  { headers: authHeader() });
};
const overseaOrder = () => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/get/oversea/shipping`,  { headers: authHeader() });
};

const userOrders = {
    pickupOrder,
    interstateOrder,
    overseaOrder
};

export default userOrders;