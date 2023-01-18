import axios from "axios";

const token = JSON.parse(localStorage.getItem('lynchpin'));

const Create = async (payload) => {
    const config = {
        headers: { 
            'Authorization': 'Bearer ' + token 
        },
    }
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL }/admin/add/sub-admins`, payload, config)
    return response;
};

const Subadmin = {
    Create,
};

export default Subadmin;