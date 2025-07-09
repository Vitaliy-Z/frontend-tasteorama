import { createSlice } from "@reduxjs/toolkit";

import { fetchCategories } from "./operations.js";
import { handleError, handlePending } from "../../utils/reduxUtils.js";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCategories.pending, handlePending)
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.error = null;
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(fetchCategories.rejected, handleError),
});

export default categoriesSlice.reducer;
