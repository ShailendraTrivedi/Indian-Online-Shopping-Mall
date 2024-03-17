import { createSlice } from "@reduxjs/toolkit";
const UserReducer = createSlice({
  name: "User Details",
  initialState: {
    loading: true,
    details: null,
  },
  reducers: {
    requestAddDetails: (state) => {
      state.loading = true;
    },
    successAddDetails: (state, action) => {
      state.loading = false;
      state.details = action.payload;
    },
    failureAddDetails: (state) => {
      state.loading = false;
    },
  },
});

export const { requestAddDetails, successAddDetails, failureAddDetails } =
  UserReducer.actions;
export default UserReducer.reducer;
