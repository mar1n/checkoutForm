import { createSlice } from "@reduxjs/toolkit";
import { initialStateDetails } from "../../utils/helpers";

const initialState = initialStateDetails;

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    detailsUpdate(state, action) {
      return (state = { ...action.payload });
    },
  },
});

export default detailsSlice.reducer;

export const { detailsUpdate } = detailsSlice.actions;
