import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getUser from "../../services/getUsers";


const initialState = {
    customers: [],
    partners: [],
    error: null,
    success: false,
}

export const getCustomers = createAsyncThunk( 
    "/get/user/customer",
    async (thunkAPI) => {
        try {
            const response = await getUser.getCustomer();
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
export const getPartners = createAsyncThunk( 
    "/get/user/partner",
    async (thunkAPI) => {
        try {
            const response = await getUser.getPartner();
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);


const usersSlice = createSlice({
    name: "/get",
    initialState,
    extraReducers: {
        [getCustomers.pending]: (state, action) => {
            state.success = false;
            state.customers = null
        },
        [getCustomers.fulfilled]: (state, action) => {
            state.customers = action.payload;
            state.success = true;
        },
        [getPartners.fulfilled]: (state, action) => {
            state.partners = action.payload;
            state.success = true;
        },
    },
});

const { reducer } = usersSlice;
export default reducer;