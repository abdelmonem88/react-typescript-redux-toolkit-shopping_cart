import { createSlice } from "@reduxjs/toolkit";

import { fetchProducts } from "./productsThunk";

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  amount: number;
}

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string;
}

const initialState = {
  products: [],
  loading: false,
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default productsSlice.reducer;
export const {} = productsSlice.actions;
