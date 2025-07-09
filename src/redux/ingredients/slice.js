import { createSlice } from "@reduxjs/toolkit";

import { fetchIngredients } from "./operations.js";
import { handleError, handlePending } from "../../utils/reduxUtils.js";

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchIngredients.pending, handlePending)
      .addCase(fetchIngredients.fulfilled, (state, { payload }) => {
        state.error = null;
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(fetchIngredients.rejected, handleError),
});

export default ingredientsSlice.reducer;
