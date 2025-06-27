import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./recipesSlice.js";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    auth: authReducer,
  },
});

export default store;
