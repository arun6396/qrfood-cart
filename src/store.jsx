import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./ProductSlice"; // Assuming ProductSlice is the correct name

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;