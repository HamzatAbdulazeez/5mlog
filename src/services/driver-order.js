import axios from "axios";
import authHeader from "./auth-header";

const token = JSON.parse(localStorage.getItem('lynchpin'));

const requestOrder = (id) => {
    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_BASE_URL }/driver/request/order/${id}`,
        headers: { 
            'Authorization': 'Bearer ' + token 
        }
    }
    return axios(config);
};
const myOrder = () => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/driver/get/orders`,  { headers: authHeader() });
};

const driverService = {
    requestOrder,
    myOrder,
};

export default driverService;