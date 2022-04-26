import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../../services/apiService";

export const fetchUser = createAsyncThunk(
    "user/login",
    (dispatch)=>{
       post("/auth/login",dispatch)
    }
)

export const signUpUser = createAsyncThunk(
    "user/register",
    (dispatch)=>{
        post("/auth/signup",dispatch)
    }
)


