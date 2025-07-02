import { createSlice } from "@reduxjs/toolkit";

import {
  fetchRecipes,
  fetchRecipesById,
  fetchFavoriteRecipes,
  fetchAddRecipe,
  fetchOwnRecipes
} from "./operations.js";
import { handleError, handlePending } from "../../utils/reduxUtils.js";

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    items: [],
    currentRecipe: null,
    isLoading: false,
    error: null
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchRecipes.pending, handlePending)
      .addCase(fetchRecipes.fulfilled, (state, { payload }) => {
        state.error = null;
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(fetchRecipes.rejected, handleError)

      .addCase(fetchRecipesById.pending, handlePending)
      .addCase(fetchRecipesById.fulfilled, (state, { payload }) => {
        state.error = null;
        state.currentRecipe = payload;
        state.isLoading = false;
      })
      .addCase(fetchRecipesById.rejected, handleError)

      .addCase(fetchFavoriteRecipes.pending, handlePending)
      .addCase(fetchFavoriteRecipes.fulfilled, (state, { payload }) => {
        state.error = null;
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(fetchFavoriteRecipes.rejected, handleError)

      .addCase(fetchAddRecipe.pending, handlePending)
      .addCase(fetchAddRecipe.fulfilled, (state, { payload }) => {
        state.error = null;
        state.currentRecipe = payload;
        state.isLoading = false;
      })
      .addCase(fetchAddRecipe.rejected, handleError)

      .addCase(fetchOwnRecipes.pending, handlePending)
      .addCase(fetchOwnRecipes.fulfilled, (state, { payload }) => {
        state.error = null;
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(fetchOwnRecipes.rejected, handleError)
});

export default recipesSlice.reducer;
