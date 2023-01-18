import axios from "axios";
import authHeader from "./auth-header";

const token = JSON.parse(localStorage.getItem('lynchpin'));

const createStaff = async (payload) => {
    const config = {
        headers: { 
            'Authorization': 'Bearer ' + token 
        },
    }
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL }/admin/add/staff`, payload, config)
    return response;
};
const getStaff = () => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/admin/get/staff`,  { headers: authHeader() });
};

const Staffs = {
    createStaff,
    getStaff
};

export default Staffs;