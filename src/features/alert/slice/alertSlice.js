import { createSlice } from "@reduxjs/toolkit";
//import { get, post, put, patch, destroy } from "../../../services/apiService";


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