import { createSlice } from "@reduxjs/toolkit";
import { initialStatePayment } from "../../utils/helpers";

const initialState = initialStatePayment;

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    paymentUpdate(state, action) {
      return (state = { ...action.payload });
    },
  },
});

export default paymentSlice.reducer

export const { paymentUpdate } = paymentSlice.actions;
