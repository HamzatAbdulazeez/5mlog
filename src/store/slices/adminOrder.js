import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminOrders from "../../services/admin-order";
import { toast } from "react-toastify";


const initialState = {
    pickupOrder: [],
    interstateOrder: [],
    overseaOrder: [],
    procureOrder: [],
    expressOrder: [],
    warehouseOrder: [],
    dispatchOrder: [],
    error: null,
    success: false,
}

export const getPickupOrder = createAsyncThunk( 
    "/get/pickup/service",
    async (thunkAPI) => {
        try {
            const response = await adminOrders.pickupOrder();
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
            const response = await adminOrders.interstateOrder();
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
            const response = await adminOrders.overseaOrder();
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
            const response = await adminOrders.procureOrder();
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
            const response = await adminOrders.expressOrder();
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
            const response = await adminOrders.warehouseOrder();
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
export const getDispatchOrder = createAsyncThunk( 
    "/get/warehousing",
    async (thunkAPI) => {
        try {
            const response = await adminOrders.dispatchedOrder();
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
export const dispatchOrders = createAsyncThunk(
    "/cancel/order",
    async ( id, thunkAPI) => {
        try {
            const response = await adminOrders.dispatchOrder(id);
            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.message)
        }
    }
);
export const updateOrders = createAsyncThunk(
    "/update/order",
    async (myData) => {
        try {
            console.log({myData})
            const response = await adminOrders.updateOrder(myData);
            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.message)
        }
    }
);


const adminOrderSlice = createSlice({
    name: "/get",
    initialState,
    extraReducers: {
        [getPickupOrder.pending]: (state, action) => {
            state.success = false;
        },
        [getPickupOrder.fulfilled]: (state, action) => {
            state.pickupOrder = action.payload;
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
        [getDispatchOrder.fulfilled]: (state, action) => {
            state.dispatchOrder = action.payload;
            state.success = true;
        },
    },
});

const { reducer } = adminOrderSlice;
export default reducer;