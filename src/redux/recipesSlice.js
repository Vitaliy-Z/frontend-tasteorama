import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import recipesData from "../api/mockData/recipes.json";

export const fetchRecipeById = createAsyncThunk(
  "recipes/fetchRecipeById",
  async (id, { rejectWithValue }) => {
    console.log("Looking for recipe with ID:", id);
    const recipe = recipesData.find((r) => r._id === id);
    console.log("Found recipe:", recipe);
    if (!recipe) return rejectWithValue("Recipe not found");
    return recipe;
  }
);

// export const toggleFavorite = (id) => (dispatch, getState) => {
//   const { currentRecipe } = getState().recipes;
//   if (currentRecipe && currentRecipe._id === id) {
//     dispatch({
//       type: "recipes/toggleFavoriteSync",
//       payload: !currentRecipe.isFavorite,
//     });
//   }
// };

const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    recipe: null,
    loading: false,
    error: null,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      if (state.recipe && state.recipe._id === action.payload) {
        state.recipe.isFavorite = !state.recipe.isFavorite;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipeById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.recipe = null;
      })
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.loading = false;
        state.recipe = action.payload;
      })
      .addCase(fetchRecipeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { toggleFavorite } = recipeSlice.actions;

export const selectRecipe = (state) => state.recipes.recipe;
export const selectLoading = (state) => state.recipes.loading;
export const selectError = (state) => state.recipes.error;

export default recipeSlice.reducer;
