import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUser = createAsyncThunk(
    "user/login",
    async(dispatch,ApiThunk)=>{
        try {
            const userResponse = await axios.post("",dispatch)
            return userResponse.data
        } catch (error) {
            return ApiThunk.rejectWithValue(error.response.data.message)
        }
    }
)

export const registerUser = createAsyncThunk(
    "user/register",
    async(dispatch,ApiThunk)=>{
        try {
            const userResponse = await axios.post("",dispatch)
            return userResponse.data
        } catch (error) {
            return ApiThunk.rejectWithValue(error.response.data.message)
        }
    }
)



const initialState = {
    currentUser: null,
    isFetching: false,
    error: false,
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        clearState:(state)=>{
            state.error = false
            state.isFetching = false    
        }
    },
    extraReducers:{
        [fetchUser.pending] : (state)=>{
            state.error = false
            state.isFetching = true
        },
        [fetchUser.fulfilled] : (state,action)=>{
            state.currentUser = action.payload
            state.error = false
            state.isFetching = false
        },
        [fetchUser.rejected] : (state)=>{
            state.error = true
            state.isFetching = false
        },
        [registerUser.pending]:(state)=>{
            state.error = false
            state.isFetching = true
        },
        [registerUser.fulfilled]:(state)=>{
            state.error = false
            state.isFetching = false
        },
        [registerUser.rejected] : (state)=>{
            state.error = true
            state.isFetching = false
        }
    }
})