import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import transact from "../../services/Transact";


const initialState= {
    transact: [],
    adminTran: [],
    success: false,
}


export const getTransact = createAsyncThunk( 
    "/get/transact",
    async (thunkAPI) => {
        try {
            const response = await transact.getTransact();
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
export const adminTransact = createAsyncThunk( 
    "/admin/transact",
    async (thunkAPI) => {
        try {
            const response = await transact.adTransact();
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);

const transactSlice = createSlice({
    name: "transact",
    initialState,
    extraReducers: {
        [getTransact.pending]: (state, action) => {
            state.success = false;
        },
        [getTransact.fulfilled]: (state, action) => {
            state.success = true;
            state.transact = action.payload

        },
        [adminTransact.pending]: (state, action) => {
            state.success = false;
        },
        [adminTransact.fulfilled]: (state, action) => {
            state.success = true;
            state.adminTran = action.payload

        },
    },
});

const { reducer } = transactSlice;
export default reducer;