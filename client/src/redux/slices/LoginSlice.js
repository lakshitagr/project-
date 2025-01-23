import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    error: null,
}

export const login = createAsyncThunk('/login', async(data)=>{
    const res = await axios.post('http://localhost:5000/auth/login', data)
    return res.data;
})