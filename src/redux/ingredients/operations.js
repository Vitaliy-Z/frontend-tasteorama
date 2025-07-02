import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/api.js";

export const fetchIngredients = createAsyncThunk(
  "recipes/fetchIngredients",
  async (_, thunkAPI) => {
    try {
      const { data } = await apiClient.get("/ingredients");
      return data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
