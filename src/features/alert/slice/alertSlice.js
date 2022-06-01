import { createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";

export const alertSlice = createSlice({
    name: "alert",
    initialState: {
        alert: null
    },
    reducers: {
        alertStart: (state, action) => {
            state.alert = action.payload.alert
            swal(state.alert)
        },
        alertReset: (state) => {
            state.alert = null
        }
    }
})

export const {
    alertStart,
    alertReset
} = alertSlice.actions;

export const selectAlert = (state) => state.alert;

export default alertSlice.reducer;