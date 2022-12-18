import axios from "axios";
import authHeader from './auth-header';

const updateProfilePhoto = (payload) => {
    return axios.post(`${process.env.REACT_APP_BASE_URL}/profile/upload/profile-picture`, payload, { headers: authHeader() });
};

const updateProfile = async (payload) => {
    const response = await axios
        .post(process.env.REACT_APP_BASE_URL + "/profile/update",
            payload,
            { headers: authHeader() }
        );
    if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
        localStorage.setItem("lynchpin", JSON.stringify(response.data.token));
    }
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


const UserSettings = {
    updateProfilePhoto,
    updateProfile,
    updatePassword
};

export default UserSettings;