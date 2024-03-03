import { createSlice } from "@reduxjs/toolkit";
const CartReducer = createSlice({
  name: "Cart",
  initialState: {
    loading: false,
    data: [
      {
        selectedColor: "Black",
        selectedProductID: "0",
        selectedProductMRP: 499,
        selectedProductName: "Classic Leather Belt",
        selectedQuantity: 1,
        selectedSize: "S",
      },
    ],
    error: "null",
  },
  reducers: {
    addToCartRequest: (state) => {
      state.loading = true;
    },
    addToCartSuccess: (state, action) => {
      state.data.unshift(action.payload);
      state.loading = false;
    },
    addToCartError: (state) => {
      state.loading = false;
    },
    incrementSuccess: (state, action) => {
      const _id = action.payload;
      const index = state.data.findIndex(
        (item) => item.selectedProductID === _id
      );
      state.data[index].selectedQuantity += 1;
    },
    decrementSuccess: (state, action) => {
      const _id = action.payload;
      const index = state.data.findIndex(
        (item) => item.selectedProductID === _id
      );
      state.data[index].selectedQuantity -= 1;
    },
    deleteSuccess: (state, action) => {
      const _id = action.payload;
      state.data = state.data.filter((item) => item.selectedProductID !== _id);
    },
  },
});

export const {
  addToCartRequest,
  addToCartSuccess,
  addToCartError,
  incrementSuccess,
  decrementSuccess,
  deleteSuccess,
} = CartReducer.actions;
export default CartReducer.reducer;
