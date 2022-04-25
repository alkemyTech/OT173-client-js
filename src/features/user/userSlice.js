import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../../services/apiService";
    
export const fetchUser = createAsyncThunk(
    "user/login",
    (dispatch,ApiThunk)=>{
       post("/auth/login",dispatch)
    }
)

export const registerUser = createAsyncThunk(
    "user/register",
    (dispatch)=>{
        post("/auth/register",dispatch)
    }
)



const initialState = {
    currentUser: null,
    isFetching: false,
    error: false,
    isSuccess:false
}

export const userSlice = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        clearState:(state)=>{
            state.error = false
            state.isFetching = false
            state.isSuccess = false;    
        }
    },
    extraReducers:{
        [fetchUser.pending] : (state)=>{
            state.error = false
            state.isFetching = true
        },
        [fetchUser.fulfilled] : (state,action)=>{
            state.currentUser = action.payload.data
            state.error = false
            state.isFetching = false
            state.isSuccess = true;
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
            state.isSuccess = true;
        },
        [registerUser.rejected] : (state)=>{
            state.error = true
            state.isFetching = false
        }
    }
})

export const {clearState} = userSlice.actions

export default userSlice.reducer