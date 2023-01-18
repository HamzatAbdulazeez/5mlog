import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./messages";

import AuthService from "../../services/auth.service";
// user: localStorage.getItem("user") !== undefined ? JSON.parse(localStorage.getItem("user")) : null,
const user = JSON.parse(localStorage.getItem("user"));
  

export const register = createAsyncThunk(
    "/auth/register",
    async ( payload, thunkAPI) => {
        try {
            const response = await AuthService.register(payload);
            thunkAPI.dispatch(setMessage(response.data));
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const login = createAsyncThunk(
    "/auth/login",
    async (payload, thunkAPI) => {
        try {
            const response = await AuthService.login(payload);
            thunkAPI.dispatch(setMessage(response));
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const adminLogin = createAsyncThunk(
    "/admin/login",
    async (payload, thunkAPI) => {
        try {
            const response = await AuthService.adminLogin(payload);
            thunkAPI.dispatch(setMessage(response));
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response &&
                    error.response.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const verifyAccount = createAsyncThunk(
    "/auth/email/confirm",
    async (payload, thunkAPI) => {
        try {
            const response = await AuthService.verifyAccount(payload);
            thunkAPI.dispatch(setMessage(response));
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const resendVerification = createAsyncThunk(
    `/auth/email/verify/resend/:id`,
    async (email, thunkAPI) => {
        try {
            const response = await AuthService.resendVerification(email);
            thunkAPI.dispatch(setMessage(response));
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const forgetPassword = createAsyncThunk(
    `/auth/password/email`,
    async (payload, thunkAPI) => {
        try {
            const response = await AuthService.forgetPassword(payload);
            thunkAPI.dispatch(setMessage(response));
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const resetPassword = createAsyncThunk(
    `/auth/password/reset`,
    async (payload, thunkAPI) => {
        try {
            const response = await AuthService.resetPassword(payload);
            thunkAPI.dispatch(setMessage(response.data));
            return response.data;
        } catch (error) {
            const message =
                    error.response.data
            console.log(message);
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const logout = createAsyncThunk("/auth/logout", async () => {
    await AuthService.logout();
    window.location.href = "/login";
});

const initialState = 
    // user: localStorage.getItem("user") !== undefined ? JSON.parse(localStorage.getItem("user")) : null,
    user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
        },
        [register.rejected]: (state, action) => {
            state.isLoggedIn = false;
        },
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [adminLogin.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload
        },
        [adminLogin.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null
        }
    },
});

const { reducer } = authSlice;
export default reducer;