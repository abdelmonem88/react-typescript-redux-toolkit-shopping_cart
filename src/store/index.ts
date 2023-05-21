import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./featurs/products/productsSlice";
import cartSlice from "./featurs/cart/cartSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
