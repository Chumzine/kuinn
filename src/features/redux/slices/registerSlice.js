import { createSlice } from "@reduxjs/toolkit";

export const register = createSlice({
    name: 'register',
    initialState: {
        fullName: "", 
        studentID: "",
        courseOfStudy: "",
        level: "",
    },
    reducers: {
        updateForm: (state, action) => {
            return { ...state, ...action.payload };
        },

    } 
})

export const { updateForm } = register.actions;

export default register.reducer;