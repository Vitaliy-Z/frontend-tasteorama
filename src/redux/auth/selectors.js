export const selectUser = ({ auth }) => auth.user;
export const selectAuthIsLoading = ({ auth }) => auth.isLoading;
export const selectAuthError = ({ auth }) => auth.error;
export const selectLoadToFavorite = ({ auth }) => auth.loadRecipeToFavorite;
