import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Staffs from "../../services/staffs";
import { setMessage } from "./messages";


const initialState= {
    staff: [],
    success: false,
}
export const createStaffs = createAsyncThunk(
    "/auth/staffs",
    async ( payload, thunkAPI) => {
        try {
            const response = await Staffs.createStaff(payload);
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
export const getStaffs = createAsyncThunk( 
    "/get/staffs",
    async (thunkAPI) => {
        try {
            const response = await Staffs.getStaff();
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
export const deleteStaffs = createAsyncThunk(
    "/delete/staffs",
    async ( id, thunkAPI) => {
        try {
            const response = await Staffs.deleteStaff(id);
            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.message)
            return thunkAPI.rejectWithValue(error)
        }
    }
);

const staffSlice = createSlice({
    name: "staffs",
    initialState,
    extraReducers: {
        [getStaffs.pending]: (state, action) => {
            state.success = false;
        },
        [getStaffs.fulfilled]: (state, action) => {
            state.success = true;
            state.staff = action.payload

        },
    },
});

const { reducer } = staffSlice;
export default reducer;