import { createSlice } from "@reduxjs/toolkit";

import { Product } from "../products/productsSlice";
import { fetchProducts } from "../products/productsThunk";

export interface cartState {
  allProducts: Product[];
  cartProducts: Product[];
}

const initialState: cartState = {
  allProducts: [],
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      // if (state.cartProducts.length === 0) {
      //   const product = state.allProducts.find(
      //     (product) => product.id === action.payload
      //   );
      //   product!.amount += 1;
      //   if (product) {
      //     state.cartProducts.push(product);
      //   }
      // } else {
      //   const product = state.cartProducts.find(
      //     (product) => product.id === action.payload
      //   );
      //   product!.amount += 1;
      // }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload.map((product: Product) => {
        return {
          ...product,
          amount: 0,
        };
      });
    });
  },
});

export default cartSlice.reducer;
export const { addProductToCart } = cartSlice.actions;
