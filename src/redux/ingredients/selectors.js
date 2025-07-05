export const selectIngredients = ({ ingredients }) => ingredients.items;
export const selectIngredientsIsLoading = ({ ingredients }) =>
  ingredients.isLoading;
export const selectIngredientsError = ({ ingredients }) => ingredients.error;
