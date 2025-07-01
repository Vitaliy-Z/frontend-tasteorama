import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/api.js";

export const fetchCategories = createAsyncThunk(
  "recipes/fetchCategories",
  async (_, thunkAPI) => {
    try {
      const { data } = await apiClient.get("/categories");
      return data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
