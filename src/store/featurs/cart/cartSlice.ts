import { createSlice } from "@reduxjs/toolkit";

import { Product } from "../products/productsSlice";

export interface cartState {
  cartProducts: Product[];
}

const initialState: cartState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});
