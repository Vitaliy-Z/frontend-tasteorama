import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filterByName: "",
    filterByCategory: null,
    filterByIngredients: null,
  },
  reducers: {
    setFilterByName: (state, { payload }) => {
      state.filterByName = payload;
    },
    setFilterByCategory: (state, { payload }) => {
      state.filterByCategory = payload;
    },
    setFilterByIngredients: (state, { payload }) => {
      state.filterByIngredients = payload;
    },
    clearFilters: (state) => {
      state.filterByName = "";
      state.filterByCategory = null;
      state.filterByIngredients = null;
    },
  },
});

export const {
  setFilterByName,
  setFilterByCategory,
  setFilterByIngredients,
  clearFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
