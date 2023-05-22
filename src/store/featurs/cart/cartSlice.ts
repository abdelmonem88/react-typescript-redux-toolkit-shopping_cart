import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { Product } from "../products/productsSlice";
import { fetchProducts } from "../products/productsThunk";

export interface cartState {
  allProducts: Product[];
  cartProducts: Product[];
  cartTotalAmount: number;
  cartTotalPrice: number;
}

const initialState: cartState = {
  allProducts: [],
  cartProducts: [],
  cartTotalAmount: 0,
  cartTotalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      // get the product from the allProducts array
      const product = state.allProducts.find(
        (product) => product.id === action.payload
      );
      // check if the product is already in the cart
      const productInCart = state.cartProducts.find(
        (product) => product.id === action.payload
      );
      if (productInCart) {
        state.cartProducts = state.cartProducts.map((product) =>
          product.id === action.payload
            ? { ...product, amount: product.amount + 1 }
            : product
        );
        toast.info("Product amount increased by 1");
      } else {
        state.cartProducts = [
          ...state.cartProducts,
          { ...product, amount: 1 } as Product,
        ];
        toast.success("Product added to cart");
      }
    },
    increaseAmount: (state, action) => {
      state.cartProducts = state.cartProducts.map((product) =>
        product.id === action.payload
          ? { ...product, amount: product.amount + 1 }
          : product
      );
    },
    decreaseAmount: (state, action) => {
      // check if the amount is 1
      const product = state.cartProducts.find(
        (product) => product.id === action.payload
      );
      if (product?.amount === 1) {
        state.cartProducts = state.cartProducts.filter(
          (product) => product.id !== action.payload
        );
      } else {
        state.cartProducts = state.cartProducts.map((product) =>
          product.id === action.payload
            ? { ...product, amount: product.amount - 1 }
            : product
        );
      }
    },
    removeItem: (state, action) => {
      state.cartProducts = state.cartProducts.filter((product) => {
        return product.id !== action.payload;
      });
    },
    removeAllItems: (state) => {
      state.cartProducts = [];
    },
    getTotals: (state) => {
      const { totalAmount, totalPrice } = state.cartProducts.reduce(
        (total, product) => {
          const { amount, price } = product;
          total.totalAmount += amount;
          total.totalPrice += amount * price;
          return total;
        },
        {
          totalAmount: 0,
          totalPrice: 0,
        }
      );
      state.cartTotalAmount = totalAmount;
      state.cartTotalPrice = totalPrice.toFixed(2) as unknown as number;
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
export const {
  addProductToCart,
  increaseAmount,
  decreaseAmount,
  removeItem,
  removeAllItems,
  getTotals,
} = cartSlice.actions;
