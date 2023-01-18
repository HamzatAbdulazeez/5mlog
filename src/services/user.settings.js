import axios from "axios";
import authHeader from './auth-header';

const updateProfilePhoto = (payload) => {
    return axios.post(`${process.env.REACT_APP_BASE_URL}/profile/upload/profile-picture`, payload, { headers: authHeader(), 'Content-Type': 'multipart/form-data' });
};

const updateProfile = async (payload) => {
    const response = await axios
        .post(process.env.REACT_APP_BASE_URL + "/profile/update",
            payload,
            { headers: authHeader() }
        );
    return response;
};

const updatePassword = async (payload) => {
    const response = await axios
        .post(process.env.REACT_APP_BASE_URL + "/profile/update/password",
            payload,
            { headers: authHeader() }
        );
    return response;
};
const updateDriver = async (payload) => {
    const response = await axios
        .post(process.env.REACT_APP_BASE_URL + "/driver/add/service/information",
            payload,
            { headers: authHeader() }
        );
    return response;
};


const UserSettings = {
    updateProfilePhoto,
    updateProfile,
    updatePassword,
    updateDriver
};

export default UserSettings;