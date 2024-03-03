import { createSlice } from "@reduxjs/toolkit";
import jsonData from "../../assets/IOSM.json";
const ProductReducer = createSlice({
  name: "Products",
  initialState: {
    loading: false,
    data: jsonData,
    error: "null",
  },
  reducers: {
    fetchRequest: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state) => {
      state.loading = false;
    },
    fetchError: (state) => {
      state.loading = false;
    },
  },
});

export default ProductReducer.reducer;
