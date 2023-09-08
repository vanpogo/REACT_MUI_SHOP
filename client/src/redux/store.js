import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/Product/productSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
  },
});
