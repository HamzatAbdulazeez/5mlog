import axios from "axios";
import authHeader from "./auth-header";

const getCustomer = () => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/admin/get/all/user/customer`,  { headers: authHeader() });
};
const getPartner = () => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/admin/get/all/user/partner`,  { headers: authHeader() });
};
const getSubAdmin = () => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/admin/get/sub-admins`,  { headers: authHeader() });
};

const getUser = {
    getCustomer,
    getPartner,
    getSubAdmin
};

export default getUser;