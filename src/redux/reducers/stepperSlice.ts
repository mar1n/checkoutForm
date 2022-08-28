import { createSlice } from "@reduxjs/toolkit";
import { initialStateStepper } from "../../utils/helpers";

const initialState = initialStateStepper;

const stepperSlice = createSlice({
  name: "stepper",
  initialState,
  reducers: {
    stepperUpdate(state, action) {
      return (state = { ...state, ...action.payload });
    },
  },
});

export default stepperSlice.reducer;

export const { stepperUpdate } = stepperSlice.actions;
