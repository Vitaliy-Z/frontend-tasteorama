import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./auth/slice.js";
import recipesReducer from "./recipes/slice.js";
import categoriesReducer from "./categories/slice.js";
import ingredientsReducer from "./ingredients/slice.js";
import filtersReducer from "./filters/slice.js";

export const store = configureStore({
  reducer: {
    auth: userReducer,
    recipes: recipesReducer,
    categories: categoriesReducer,
    ingredients: ingredientsReducer,
    filteres: filtersReducer
  }
});
