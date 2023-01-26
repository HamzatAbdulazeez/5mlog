import axios from "axios";
import authHeader from "./auth-header";

const token = JSON.parse(localStorage.getItem('lynchpin'));

const newInventory = async (payload) => {
    const config = {
        headers: { 
            'Authorization': 'Bearer ' + token 
        },
    }
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL }/admin/add/inventory`, payload, config)
    return response;
};
const getInventory = () => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/admin/get/inventory`,  { headers: authHeader() });
};
const deleteInventory = (id) => {
    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_BASE_URL }/admin/delete/inventory/${id}`,
        headers: { 
            'Authorization': 'Bearer ' + token 
        }
    }
    return axios(config);
};

const invent = {
   newInventory,
   getInventory,
   deleteInventory
};

export default invent;