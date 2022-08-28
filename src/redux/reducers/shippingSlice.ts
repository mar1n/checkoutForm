import { createSlice } from "@reduxjs/toolkit";
import { initialStateShipping } from "../../utils/helpers";
const initialState = initialStateShipping;

const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {
    shippingUpdate(state, action) {
      return (state = { ...action.payload });
    },
  },
});

export default shippingSlice.reducer;

export const { shippingUpdate } = shippingSlice.actions;
