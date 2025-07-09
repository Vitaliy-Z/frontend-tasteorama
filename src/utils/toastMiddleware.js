import { isRejected, isFulfilled } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// УСПІШНІ ДІЇ
const successMessagesMap = new Map([
  ["fetchRegisterUser", "Registration successful!"],
  ["fetchLoginUser", (action) => `Welcome, ${action.payload?.name || "user"}!`],
  ["fetchLogoutUser", "See you soon!"],
  ["fetchAddRecipesToFavorite", "Recipe added to favorites!"],
  ["fetchDeleteRecipesFromFavorite", "Recipe removed from favorites!"],
  ["fetchAddRecipe", "Recipe successfully added"],
]);

// КАСТОМНІ ПОМИЛКИ
const errorHandlersMap = new Map([
  [
    "fetchLoginUser",
    (action) => {
      const status = action.payload?.status;
      const message = action.payload?.message?.toLowerCase();
      if (status === 401) return "Wrong email or password.";
      if (message?.includes("not registered")) return "User not found.";
      return "Login failed.";
    },
  ],
  ["fetchRegisterUser", () => "Registration failed. Try another email."],
  ["fetchLogoutUser", () => "Logout failed."],
  ["fetchAddRecipesToFavorite", () => "Failed to add recipe to favorites."],
  [
    "fetchDeleteRecipesFromFavorite",
    () => "Failed to remove recipe from favorites.",
  ],
  ["fetchAddRecipe", () => "Failed to add recipe."],
  ["fetchFavoriteRecipes", () => "Failed to load favorite recipes."],
  ["fetchRecipes", () => "Failed to load recipes."],
  ["fetchRecipeById", () => "Recipe not found."],
  ["fetchProfileRecipes", () => "Failed to load your recipes."],
]);

// Повідомлення про пустий результат пошуку-фільтру
const emptyResultsMessagesMap = new Map([
  ["fetchRecipes", "No recipes found matching your criteria."],
  ["fetchFavoriteRecipes", "You have no favorite recipes yet."],
  ["fetchProfileRecipes", "You have not added any recipes yet."],
]);

export const toastMiddleware = () => (next) => (action) => {
  // Помилка
  if (isRejected(action)) {
    let errorMessage;
    for (const [key, handler] of errorHandlersMap.entries()) {
      if (action.type.includes(key)) {
        errorMessage =
          typeof handler === "function" ? handler(action) : handler;
        break;
      }
    }

    if (!errorMessage) {
      errorMessage =
        action.payload?.message || // тепер це просте поле
        action.error?.message ||
        "Something went wrong.";
    }

    toast.error(errorMessage);
  }

  // Успіх
  if (isFulfilled(action)) {
    for (const [key, message] of successMessagesMap.entries()) {
      if (action.type.includes(key)) {
        const text = typeof message === "function" ? message(action) : message;
        toast.success(text);
        return next(action);
      }
    }

    for (const [key, emptyMessage] of emptyResultsMessagesMap.entries()) {
      if (action.type.includes(key)) {
        const payload = action.payload;
        if (
          (Array.isArray(payload) && payload.length === 0) ||
          (payload &&
            Array.isArray(payload.recipes) &&
            payload.recipes.length === 0)
        ) {
          toast.info(emptyMessage);
          break;
        }
      }
    }
  }

  return next(action);
};
