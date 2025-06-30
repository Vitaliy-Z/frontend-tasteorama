import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import recipesReducer from "./recipesSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    recipes: recipesReducer
    // categories
    // ingredients
  }
});

export default store;
