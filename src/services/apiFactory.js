import axios from "axios";
import authHeader from './auth-header';

const pickupService = (payload) => {
    return axios.post(`${process.env.REACT_APP_BASE_URL}/add/pickup/service`, payload, { headers: authHeader() });
};

const addFreight = async (payload) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/add/freight`, payload, { headers: authHeader() });
    return response;
}

const addInterState = async (payload) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/add/inter-state/service`, payload, { headers: authHeader() });
    return response;
}

const addExpress = async (payload) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/add/express/shipping`, payload, { headers: authHeader() });
    return response;
}

const addWarehousing = async (payload) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/add/warehousing`, payload, { headers: authHeader() });
    return response;
}

const apiFactory = {
    pickupService,
    addFreight,
    addInterState,
    addExpress,
    addWarehousing
};

export default apiFactory;