import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      return data;
    } catch (error) {
      const err = error as AxiosError;
      if (err.message) {
        return rejectWithValue(err.message);
      } else {
        return rejectWithValue("Something went wrong");
      }
    }
  }
);
