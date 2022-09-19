import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterState } from "./counter.types";

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = counterSlice.actions;

export default counterSlice.reducer;

export * as ActionCreators from "./counter.actions";
