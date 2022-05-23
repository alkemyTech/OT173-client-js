import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
    name: "alert",
    initialState: {
        alertStatus: null
    },
    reducers: {
        alertReduce: (state, action) => {
            state.alertStatus = action.payload.alert
        }
    }  
})

export const { alertReduce } = alertSlice.actions;

export const selectAlert = state => state.alertStatus;

export default alertSlice.reducer;