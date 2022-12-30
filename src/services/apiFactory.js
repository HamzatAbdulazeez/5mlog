import axios from "axios";
import authHeader from './auth-header';

const pickupService = (payload) => {
    return axios.post(`${process.env.REACT_APP_BASE_URL}/add/pickup/service`, payload, { headers: authHeader() });
};

const addFreight = async (payload) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/add/freight`, payload, { headers: authHeader() });
    return response;
}

const apiFactory = {
    pickupService,
    addFreight
};

export default apiFactory;