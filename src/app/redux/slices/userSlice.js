import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: 0,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserCount: (state) => {
            state.user += 1;
        },
    },
})

export const { updateUserCount } = userSlice.actions;

export default userSlice.reducer;