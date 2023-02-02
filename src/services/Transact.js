import axios from "axios";
import authHeader from "./auth-header";


const getTransact = () => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/get/transaction`,  { headers: authHeader() });
};
const adTransact = () => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/admin/get/transactions`,  { headers: authHeader() });
};

const transact = {
    getTransact,
    adTransact,
 };
 
 export default transact;