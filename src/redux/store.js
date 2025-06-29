import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './recipeSlice';

const store = configureStore({
  reducer: {
    recipe: recipeReducer,
  },
});

export default store;
