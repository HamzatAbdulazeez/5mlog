import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import invent from "../../services/inventory";
import vehicle from "../../services/vehicle";
import { setMessage } from "./messages";


const initialState= {
    ivehicle: [],
    success: false,
}
export const createVehicle = createAsyncThunk(
    "/auth/staffs",
    async ( payload, thunkAPI) => {
        try {
            const response = await vehicle.newVehicle(payload);
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
export const getVehicle = createAsyncThunk( 
    "/get/inventory",
    async (thunkAPI) => {
        try {
            const response = await vehicle.getVehicle();
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
export const deleteVehicle = createAsyncThunk(
    "/delete/inventory",
    async ( id, thunkAPI) => {
        try {
            const response = await vehicle.deleteVehicle(id);
            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.message)
            return thunkAPI.rejectWithValue(error)
        }
    }
);
export const updateVehicle = createAsyncThunk(
    "/delete/inventory",
    async ( id, thunkAPI) => {
        try {
            const response = await vehicle.updateVehicle(id);
            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.message)
            return thunkAPI.rejectWithValue(error)
        }
    }
);


const vehicleSlice = createSlice({
    name: "vehicle",
    initialState,
    extraReducers: {
        [getVehicle.pending]: (state, action) => {
            state.success = false;
        },
        [getVehicle.fulfilled]: (state, action) => {
            state.success = true;
            state.inventory = action.payload

        },
    },
});

const { reducer } = vehicleSlice;
export default reducer;