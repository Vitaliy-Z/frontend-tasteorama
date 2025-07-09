import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchFavoriteRecipes } from "../../../redux/recipes/operations";
import {
  selectRecipesItems,
  selectRecipesIsLoadingFavoriteRecipes,
} from "../../../redux/recipes/selectors";

import RecipesList from "../../shared/RecipesList/RecipesList.jsx";
import Loader from "../../shared/Loader/Loader.jsx";

const FavoritesList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipesItems);
  const isLoadingFavoriteRecipes = useSelector(
    selectRecipesIsLoadingFavoriteRecipes,
  );

  useEffect(() => {
    dispatch(fetchFavoriteRecipes());
  }, [dispatch]);

  if (isLoadingFavoriteRecipes) return <Loader />;

  // if (recipes.length === 0) return <h3>No favorites recipes</h3>;
  if (!Array.isArray(recipes) || recipes.length === 0)
    return <h3>No favorites</h3>;

  return <RecipesList recipes={recipes} />;
};

export default FavoritesList;
