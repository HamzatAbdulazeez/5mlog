import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./messages";

import apiFactory from "../../services/apiFactory";

const user = JSON.parse(localStorage.getItem("user"));

export const pickupService = createAsyncThunk(
    "/add/pickup/service",
    async (payload, thunkAPI) => {
        try {
            const response = await apiFactory.pickupService(payload);
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

const apiServicesSlice = createSlice({
    name: "settings",
    initialState,
    extraReducers: {
        [pickupService.fulfilled]: (state, action) => {
            state.user = action.payload.user;
        },
    },
});

const { reducer } = apiServicesSlice;
export default reducer;