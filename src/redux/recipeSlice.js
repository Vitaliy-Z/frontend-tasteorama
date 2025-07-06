import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipes: [],
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    addRecipe(state, action) {
      state.recipes.push(action.payload);
    },
  },
});

export const { addRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
