import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./slices/registerSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        register: registerReducer,
        user: userReducer,
    }
})