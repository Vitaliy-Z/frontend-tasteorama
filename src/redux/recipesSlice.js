import { createSlice } from "@reduxjs/toolkit";

const initState = [];

const recipesReducer = createSlice({
  name: "recipes",
  initialState: initState,
  reducers: {
    addRecipe: (state, action) => [...state, action.payload],
    removeRecipe: (state, action) =>
      state.filter((recipe) => recipe.id === action.payload)
  }
});

export const { addRecipe, removeRecipe } = recipesReducer.actions;

export default recipesReducer.reducer;
