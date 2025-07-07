export const selectRecipesItems = ({ recipes }) => recipes.items;
export const selectCurrentRecipes = ({ recipes }) => recipes.currentRecipe;
export const selectRecipesPage = ({ recipes }) => recipes.page;
export const selectRecipesPerPage = ({ recipes }) => recipes.perPage;
export const selectRecipesTotalItems = ({ recipes }) => recipes.totalItems;
export const selectRecipesTotalPages = ({ recipes }) => recipes.totalPages;

export const selectRecipesIsLoadingAllRecipes = ({ recipes }) =>
  recipes.isLoadingAllRecipes;
export const selectRecipesIsLoadingMoreRecipes = ({ recipes }) =>
  recipes.isLoadingMoreRecipes;
export const selectRecipesIsLoadingCurrentRecipe = ({ recipes }) =>
  recipes.isLoadingCurrentRecipe;
export const selectRecipesIsLoadingFavoriteRecipes = ({ recipes }) =>
  recipes.isLoadingFavoriteRecipes;
export const selectRecipesIsLoadingAddRecipe = ({ recipes }) =>
  recipes.isLoadingAddRecipe;
export const selectRecipesIsLoadingOwnRecipes = ({ recipes }) =>
  recipes.isLoadingOwnRecipes;

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
