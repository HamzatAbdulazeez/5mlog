import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


import userOrders from "../../services/user-order";

const initialState = {
    userOrder: [],
    interstateOrder: [],
    overseaOrder: [],
    procureOrder: [],
    expressOrder: [],
    warehouseOrder: [],
    adminOrders: [],
    error: null,
    success: false,
}

export const getPickupOrder = createAsyncThunk( 
    "/get/pickup/service",
    async (thunkAPI) => {
        try {
            const response = await userOrders.pickupOrder();
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
export const getInterstateOrder = createAsyncThunk( 
    "/get/inter-state/service",
    async (thunkAPI) => {
        try {
            const response = await userOrders.interstateOrder();
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
export const getOverseaOrder = createAsyncThunk( 
    "/get/oversea/service",
    async (thunkAPI) => {
        try {
            const response = await userOrders.overseaOrder();
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
export const getProcureOrder = createAsyncThunk( 
    "/get/procurement",
    async (thunkAPI) => {
        try {
            const response = await userOrders.procureOrder();
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
export const getExpressOrder = createAsyncThunk( 
    "/get/express/shipping",
    async (thunkAPI) => {
        try {
            const response = await userOrders.expressOrder();
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
export const getWarehouseOrder = createAsyncThunk( 
    "/get/warehousing",
    async (thunkAPI) => {
        try {
            const response = await userOrders.warehouseOrder();
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);


const userOrderSlice = createSlice({
    name: "/get",
    initialState,
    extraReducers: {
        [getPickupOrder.pending]: (state, action) => {
            state.success = false;
        },
        [getPickupOrder.fulfilled]: (state, action) => {
            state.userOrder = action.payload;
            state.success = true;
        },
        [getInterstateOrder.fulfilled]: (state, action) => {
            state.interstateOrder = action.payload;
            state.success = true;
        },
        [getOverseaOrder.fulfilled]: (state, action) => {
            state.overseaOrder = action.payload;
            state.success = true;
        },
        [getProcureOrder.fulfilled]: (state, action) => {
            state.procureOrder = action.payload;
            state.success = true;
        },
        [getExpressOrder.fulfilled]: (state, action) => {
            state.expressOrder = action.payload;
            state.success = true;
        },
        [getWarehouseOrder.fulfilled]: (state, action) => {
            state.warehouseOrder = action.payload;
            state.success = true;
        },
    },
});

const { reducer } = userOrderSlice;
export default reducer;