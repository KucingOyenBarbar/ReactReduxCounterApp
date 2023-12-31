import { createSlice } from "@reduxjs/toolkit";

export const initialState: Counter = { count: 0 }

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state): void => {
      state.count -= 1
    },
    reset: (state): void => {
      state.count = 0
    },
  
    incrementByAmount: (state, action): void => {
      state.count += action.payload
    }
  }
})

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer