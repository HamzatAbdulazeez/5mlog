import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import driverService from "../../services/driver-order";
import { setMessage } from "./messages";


const initialState= {
    myOrder: [],
    error: null,
    success: false,
}

export const requestOrder = createAsyncThunk(
    "/auth/driver",
    async ( id, thunkAPI) => {
        try {
            const response = await driverService.requestOrder(id);
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
export const getMyOrder = createAsyncThunk( 
    "/get/myorder",
    async (thunkAPI) => {
        try {
            const response = await driverService.myOrder();
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);

const driverSlice = createSlice({
    name: "driver",
    initialState,
    extraReducers: {
        [getMyOrder.pending]: (state, action) => {
            state.success = false;
        },
        [getMyOrder.fulfilled]: (state, action) => {
            state.myOrder = action.payload;
            state.success = true;
        },
     },
});

const { reducer } = driverSlice;
export default reducer;