import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../../services/auth-header";

const initialState= {
    allNotify: [],
    success: false,
}

export const getAllNotify = createAsyncThunk( 
    "/get/notification",
    async (thunkAPI) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/get/all/notifications`,  { headers: authHeader() });
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);

const notifySlice = createSlice({
    name: "inventory",
    initialState,
    extraReducers: {
        [getAllNotify.pending]: (state, action) => {
            state.success = false;
        },
        [getAllNotify.fulfilled]: (state, action) => {
            state.success = true;
            state.allNotify = action.payload

        },
    },
});

const { reducer } = notifySlice;
export default reducer;