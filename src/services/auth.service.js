import axios from "axios";
const API_URL = `http://5million.greenmouseproperties.com/api`;

const register = (payload) => {
    return axios.post(API_URL + "/auth/register", payload);
};

const login = async (payload) => {
    const response = await axios
        .post(API_URL + "/auth/login",
            payload
            );
    if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
        localStorage.setItem("lynchpin", JSON.stringify(response.data.token));
    }
    return response.data;
};

const verifyAccount = async (payload) => {
    const response = await axios
        .post(API_URL + "/auth/email/confirm",
            payload
        );
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const resendVerification = async (payload) => {
    const response = await axios
        .post(API_URL + "/auth/email/verify/resend/" + payload);
    return response.data;
};

const forgetPassword = async (payload) => {
    const response = await axios
        .post(API_URL + "/auth/password/email",payload);
    return response.data;
};

const resetPassword = async (payload) => {
    const response = await axios.post(API_URL + "/auth/password/reset", payload);
    return response.data;
};

const logout = () => {
    localStorage.removeItem("user");
};

const AuthService = {
    register,
    login,
    logout,
    verifyAccount,
    resendVerification,
    forgetPassword,
    resetPassword
};

export default AuthService;