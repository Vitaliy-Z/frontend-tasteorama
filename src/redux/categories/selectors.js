export const selectCategories = ({ categories }) => categories.items;
export const selectCategoriesIsLoading = ({ categories }) =>
  categories.isLoading;
export const selectCategoriesError = ({ categories }) => categories.error;
