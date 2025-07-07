import { createSlice } from "@reduxjs/toolkit";

import {
  fetchRecipes,
  fetchRecipesById,
  fetchFavoriteRecipes,
  fetchAddRecipe,
  fetchOwnRecipes,
  loadMoreRecipes
} from "./operations.js";
import { handleError } from "../../utils/reduxUtils.js";

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    items: [],
    page: 1,
    perPage: 12,
    totalItems: 0,
    totalPages: 0,
    currentRecipe: null,
    isLoadingAllRecipes: false,
    isLoadingMoreRecipes: false,
    isLoadingCurrentRecipe: false,
    isLoadingFavoriteRecipes: false,
    isLoadingAddRecipe: false,
    isLoadingOwnRecipes: false,
    error: null
  },

  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    }
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.error = null;
        state.isLoadingAllRecipes = true;
      })
      .addCase(fetchRecipes.fulfilled, (state, { payload }) => {
        state.error = null;
        state.items = payload.data;
        state.page = payload.page;
        state.perPage = payload.perPage;
        state.totalItems = payload.totalItems;
        state.totalPages = payload.totalPages;
        state.isLoadingAllRecipes = false;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.isLoadingAllRecipes = false;
        handleError(state, action);
      })

      .addCase(loadMoreRecipes.pending, (state) => {
        state.error = null;
        state.isLoadingMoreRecipes = true;
      })
      .addCase(loadMoreRecipes.fulfilled, (state, { payload }) => {
        state.error = null;
        state.items = state.items.concat(payload.data);
        state.isLoadingMoreRecipes = false;
      })
      .addCase(loadMoreRecipes.rejected, (state, action) => {
        state.isLoadingMoreRecipes = false;
        handleError(state, action);
      })

      .addCase(fetchRecipesById.pending, (state) => {
        state.error = null;
        state.isLoadingCurrentRecipe = true;
      })
      .addCase(fetchRecipesById.fulfilled, (state, { payload }) => {
        state.error = null;
        state.currentRecipe = payload;
        state.isLoadingCurrentRecipe = false;
      })
      .addCase(fetchRecipesById.rejected, (state, action) => {
        state.isLoadingCurrentRecipe = false;
        handleError(state, action);
      })

      .addCase(fetchFavoriteRecipes.pending, (state) => {
        state.error = null;
        state.isLoadingFavoriteRecipes = true;
      })
      .addCase(fetchFavoriteRecipes.fulfilled, (state, { payload }) => {
        state.error = null;
        state.items = payload;
        state.isLoadingFavoriteRecipes = false;
      })
      .addCase(fetchFavoriteRecipes.rejected, (state, action) => {
        state.isLoadingFavoriteRecipes = false;
        handleError(state, action);
      })

      .addCase(fetchAddRecipe.pending, (state) => {
        state.error = null;
        state.isLoadingAddRecipe = true;
      })
      .addCase(fetchAddRecipe.fulfilled, (state, { payload }) => {
        state.error = null;
        state.currentRecipe = payload;
        state.isLoadingAddRecipe = false;
      })
      .addCase(fetchAddRecipe.rejected, (state, action) => {
        state.isLoadingAddRecipe = false;
        handleError(state, action);
      })

      .addCase(fetchOwnRecipes.pending, (state) => {
        state.error = null;
        state.isLoadingOwnRecipes = true;
      })
      .addCase(fetchOwnRecipes.fulfilled, (state, { payload }) => {
        state.error = null;
        state.items = payload.data;
        state.page = payload.page;
        state.perPage = payload.perPage;
        state.totalItems = payload.totalItems;
        state.totalPages = payload.totalPages;
        state.isLoadingOwnRecipes = false;
      })
      .addCase(fetchOwnRecipes.rejected, (state, action) => {
        state.isLoadingOwnRecipes = false;
        handleError(state, action);
      })
});

export const { setPage } = recipesSlice.actions;

export default recipesSlice.reducer;
