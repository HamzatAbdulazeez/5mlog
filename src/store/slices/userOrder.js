import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


import userOrders from "../../services/user-order";

const initialState = {
    userOrder: [],
    interstateOrder: [],
    overseaOrder: [],
    adminOrders: [],
    error: null,
    success: false,
}

export const getPickupOrder = createAsyncThunk( 
    "/get/pickup/service",
    async () => {
        try {
            const response = await userOrders.pickupOrder();
            return response.data.data;
        } catch (error) {
            console.log(error)
        }
    }
);
export const getInterstateOrder = createAsyncThunk( 
    "/get/inter-state/service",
    async () => {
        try {
            const response = await userOrders.interstateOrder();
            return response.data.data;
        } catch (error) {
            console.log(error)
        }
    }
);
export const getOverseaOrder = createAsyncThunk( 
    "/get/oversea/service",
    async () => {
        try {
            const response = await userOrders.overseaOrder();
            return response.data.data;
        } catch (error) {
            console.log(error)
        }
    }
);


const userOrderSlice = createSlice({
    name: "/get",
    initialState,
    extraReducers: {
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
    },
});

const { reducer } = userOrderSlice;
export default reducer;