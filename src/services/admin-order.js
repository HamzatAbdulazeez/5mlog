import axios from "axios";
import authHeader from "./auth-header";

const pickupOrder = () => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/admin/get/all/pickup/service`,  { headers: authHeader() });
};
const interstateOrder = () => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/admin/get/all/inter-state/service`,  { headers: authHeader() });
};
const overseaOrder = () => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/admin/get/all/oversea/shipping`,  { headers: authHeader() });
};
const procureOrder = () => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/admin/get/all/procurement`,  { headers: authHeader() });
};
const expressOrder = () => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/admin/get/all/express/shipping`,  { headers: authHeader() });
};
const warehouseOrder = () => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/admin/get/all/warehousing`,  { headers: authHeader() });
};

const adminOrders = {
    pickupOrder,
    interstateOrder,
    overseaOrder,
    procureOrder,
    expressOrder,
    warehouseOrder
};

export default adminOrders;