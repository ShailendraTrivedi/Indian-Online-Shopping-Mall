import { configureStore } from "@reduxjs/toolkit";
import { CartReducer, ProductReducer } from ".";

const store = configureStore({
  reducer: {
    productStore: ProductReducer,
    cartStore: CartReducer,
  },
});

export default store;
