import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  "/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:3000/auth/login", data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        (state.loading = false), console.log(action.payload);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.error = action.payload.data.message;
      });
  },
});

export default LoginSlice.reducer;

//git add .
//git commit -m 'initial commit'
//git push
