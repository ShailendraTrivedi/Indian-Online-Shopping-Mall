import { configureStore } from "@reduxjs/toolkit";
import { CartReducer, ProductReducer, UserReducer } from ".";

const store = configureStore({
  reducer: {
    productStore: ProductReducer,
    cartStore: CartReducer,
    userStore: UserReducer,
  },
});

export default store;
