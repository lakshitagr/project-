import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: function (state) {
      return state.count++;
    },
  },
});


export default CounterSlice.reducer;
export const { increment } = CounterSlice.actions
