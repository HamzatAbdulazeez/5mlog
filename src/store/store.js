import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/auth";
import messageReducer from "./slices/messages";
import userReducer from "./slices/apiServices";
import orderReducer from "./slices/userOrder";

const reducer = {
    auth: authReducer,
    message: messageReducer,
    user: userReducer,
    order: orderReducer
}

const store = configureStore({
    reducer: reducer,
    devTools: true,
})

export default store;