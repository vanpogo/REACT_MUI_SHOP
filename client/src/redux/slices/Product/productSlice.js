import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../axios.js";

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async (_, ThunkAPI) => {
    try {
      const { data } = await axios.get("/products");
      return data;
    } catch (e) {
      console.log(e);
      return ThunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {
  products: [],
  isLoading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    //GET ALL PRODUCTS
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.isLoading = true;
      state.products = null;
    });
    builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.products = payload.products;
    });
    builder.addCase(getAllProducts.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.products = null;
    });
  },
});

export default productSlice.reducer;
