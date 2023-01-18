import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Subadmin from "../../services/sub-admins";
import { setMessage } from "./messages";


const initialState= {}
export const createAdmin = createAsyncThunk(
    "/auth/subadmin",
    async ( payload, thunkAPI) => {
        try {
            const response = await Subadmin.Create(payload);
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

const subAdminSlice = createSlice({
    name: "subAdmin",
    initialState,
    reducers: { },
});

const { reducer } = subAdminSlice;
export default reducer;