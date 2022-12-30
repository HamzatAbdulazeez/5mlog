import axios from "axios";
import authHeader from './auth-header';

const pickupService = (payload) => {
    return axios.post(`${process.env.REACT_APP_BASE_URL}/add/pickup/service`, payload, { headers: authHeader() });
};

const apiFactory = {
    pickupService,
};

export default apiFactory;