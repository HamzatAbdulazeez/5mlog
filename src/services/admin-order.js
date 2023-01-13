import axios from "axios";
import authHeader from "./auth-header";

const token = JSON.parse(localStorage.getItem('lynchpin'));

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
const dispatchedOrder = () => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/get/order-board`,  { headers: authHeader() });
};
const dispatchOrder = (id) => {
    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_BASE_URL }/admin/dispatch/order/${id}`,
        headers: { 
            'Authorization': 'Bearer ' + token 
        }
    }
    return axios(config);
};
const updateOrder = async (values) => {
    const config = {
        headers: { 
            'Authorization': 'Bearer ' + token 
        },
    }
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL }/admin/update/order/${values.id}`, values, config)
    return response;
};

const adminOrders = {
    pickupOrder,
    interstateOrder,
    overseaOrder,
    procureOrder,
    expressOrder,
    warehouseOrder,
    dispatchOrder,
    dispatchedOrder,
    updateOrder
};

export default adminOrders;