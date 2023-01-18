import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import invent from "../../services/inventory";
import { setMessage } from "./messages";


const initialState= {
    inventory: [],
    success: false,
}
export const createItem = createAsyncThunk(
    "/auth/staffs",
    async ( payload, thunkAPI) => {
        try {
            const response = await invent.newInventory(payload);
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
export const getInventories = createAsyncThunk( 
    "/get/inventory",
    async (thunkAPI) => {
        try {
            const response = await invent.getInventory();
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);

const inventSlice = createSlice({
    name: "inventory",
    initialState,
    extraReducers: {
        [getInventories.pending]: (state, action) => {
            state.success = false;
        },
        [getInventories.fulfilled]: (state, action) => {
            state.success = true;
            state.inventory = action.payload

        },
    },
});

const { reducer } = inventSlice;
export default reducer;