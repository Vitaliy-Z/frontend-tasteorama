import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/api.js";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (queryParams = {}, thunkAPI) => {
    try {
      const { data } = await apiClient.get("/recipes", { params: queryParams });
      return data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const loadMoreRecipes = createAsyncThunk(
  "recipes/loadMoreRecipes",
  async (queryParams = {}, thunkAPI) => {
    try {
      const { data } = await apiClient.get("/recipes", { params: queryParams });
      return data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const fetchRecipesById = createAsyncThunk(
  "recipes/fetchRecipesById",
  async (recipeId, thunkAPI) => {
    try {
      const { data } = await apiClient.get(`/recipes/${recipeId}`);
      return data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const fetchAddRecipe = createAsyncThunk(
  "recipes/fetchAddRecipe",
  async (newRecipe, thunkAPI) => {
    try {
      const { data } = await apiClient.post("/recipes", newRecipe);
      return data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const fetchOwnRecipes = createAsyncThunk(
  "recipes/fetchOwnRecipes",
  async (_, thunkAPI) => {
    try {
      const { data } = await apiClient.get("/recipes/user");
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const fetchFavoriteRecipes = createAsyncThunk(
  "recipes/fetchFavoriteRecipes",
  async (_, thunkAPI) => {
    try {
      const { data } = await apiClient.get("/recipes/favorite");
      return data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const fetchAddRecipesToFavorite = createAsyncThunk(
  "recipes/fetchAddRecipesToFavorite",
  async (recipeId, thunkAPI) => {
    try {
      const { data } = await apiClient.post("/recipes/favorite", { recipeId });
      return data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const fetchDeleteRecipesFromFavorite = createAsyncThunk(
  "recipes/fetchDeleteRecipesFromFavorite",
  async (recipeId, thunkAPI) => {
    try {
      const { data } = await apiClient.delete(`/recipes/favorite/${recipeId}`);
      return data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);
