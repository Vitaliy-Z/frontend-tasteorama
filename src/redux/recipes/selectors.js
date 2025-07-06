export const selectRecipes = ({ recipes }) => recipes.items;
export const selectCurrentRecipes = ({ recipes }) => recipes.currentRecipe;
export const selectRecipesIsLoading = ({ recipes }) => recipes.isLoading;
export const selectRecipesError = ({ recipes }) => recipes.error;
export const selectRecipeByName = ({ recipes, filters }) => {
  if (filters.filterByName === "") return recipes.items;
  return recipes.items.filter((recipe) =>
    recipe.title.toLowerCase().includes(filters.filterByName.toLowerCase())
  );
};
export const selectRecipesByCategory = ({ recipes, filters }) => {
  if (!filters.filterByCategory) return recipes.items;
  return recipes.items.filter(
    (recipe) => recipe.category._id === filters.filterByCategory._id
  );
};
export const selectRecipesByIngredients = ({ recipes, filters }) => {
  if (!filters.filterByIngredients) return recipes.items;

  return recipes.items.filter((el) =>
    el.ingredients.some((ingr) => ingr._id === filters.filterByIngredients._id)
  );
};
export const selectFilteredRecipes = (state) => {
  let filteredRecipes = state.recipes.items;

  if (state.filters.filterByName !== "") {
    filteredRecipes = selectRecipeByName(state);
  }
  if (state.filters.filterByCategory) {
    filteredRecipes = selectRecipesByCategory(state);
  }
  if (state.filters.filterByIngredients) {
    filteredRecipes = selectRecipesByIngredients(state);
  }

  return filteredRecipes;
};
