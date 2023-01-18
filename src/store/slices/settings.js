import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./messages";

import UserSettings from "../../services/user.settings";

const user = JSON.parse(localStorage.getItem("user"));

export const updateProfilePhoto = createAsyncThunk(
    "/profile/upload/profile-picture",
    async (payload, thunkAPI) => {
        try {
            const response = await UserSettings.updateProfilePhoto(payload);
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


export const updateProfile = createAsyncThunk(
    "/profile/update",
    async (payload, thunkAPI) => {
        try {
            const response = await UserSettings.updateProfile(payload);
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


export const updatePassword = createAsyncThunk(
    "/profile/update/password",
    async (payload, thunkAPI) => {
        try {
            const response = await UserSettings.updatePassword(payload);
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
export const updateDriver = createAsyncThunk(
    "/profile/update/driver",
    async (payload, thunkAPI) => {
        try {
            const response = await UserSettings.updateDriver(payload);
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


const initialState = user;
// const initialState ={
//     user: null
// }

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    extraReducers: {
        [updateProfilePhoto.fulfilled]: (state, action) => {
            state.user = action.payload.user;
        },
        [updateProfile.fulfilled]: (state, action) => {
            state.user = action.payload.user;
        },
        [updateDriver.fulfilled]: (state, action) => {
            state.user = action.payload.user;
        },
    },
});

const { reducer } = settingsSlice;
export default reducer;