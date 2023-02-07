import axios from "axios";
import authHeader from './auth-header';

const pickupService = (payload) => {
    return axios.post(`${process.env.REACT_APP_BASE_URL}/add/pickup/service`, payload, { headers: authHeader() });
};
const adminPickupService = (payload) => {
    return axios.post(`${process.env.REACT_APP_BASE_URL}/admin/add/pickup/service`, payload, { headers: authHeader() });
};

const addFreight = async (payload) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/add/oversea/shipping`, payload, { headers: authHeader() });
    return response;
}
const adminAddFreight = async (payload) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/admin/add/oversea/shipping`, payload, { headers: authHeader() });
    return response;
}

const addInterState = async (payload) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/add/inter-state/service`, payload, { headers: authHeader() });
    return response;
}
const AdminAddInterState = async (payload) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/admin/add/inter-state/service`, payload, { headers: authHeader() });
    return response;
}

const addProcurement = async (payload) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/add/procurement`, payload, { headers: authHeader() });
    return response;
}
const adminAddProcurement = async (payload) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/admin/add/procurement`, payload, { headers: authHeader() });
    return response;
}

const addExpress = async (payload) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/add/express/shipping`, payload, { headers: authHeader() });
    return response;
}
const adminAddExpress = async (payload) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/admin/add/express/shipping`, payload, { headers: authHeader() });
    return response;
}

const addWarehousing = async (payload) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/add/warehousing`, payload, { headers: authHeader() });
    return response;
}
const adminAddWarehousing = async (payload) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/admin/add/warehousing`, payload, { headers: authHeader() });
    return response;
}

const apiFactory = {
    pickupService,
    addFreight,
    addInterState,
    addExpress,
    addWarehousing,
    addProcurement,
    adminAddExpress,
    adminAddFreight,
    adminAddWarehousing,
    adminPickupService,
    AdminAddInterState,
    adminAddProcurement
};

export default apiFactory;