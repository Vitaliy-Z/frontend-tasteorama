import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchOwnRecipes } from "../../../redux/recipes/operations";
import {
  selectRecipesItems,
  selectRecipesIsLoadingOwnRecipes,
} from "../../../redux/recipes/selectors";
import styles from "./MyRecipesList.module.css";
import RecipesList from "../../shared/RecipesList/RecipesList.jsx";
import Loader from "../../shared/Loader/Loader.jsx";

const MyRecipesList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipesItems);

  const isLoadingOwnRecipes = useSelector(selectRecipesIsLoadingOwnRecipes);

  useEffect(() => {
    dispatch(fetchOwnRecipes());
  }, [dispatch]);

  if (isLoadingOwnRecipes) return <Loader />;

  if (!Array.isArray(recipes) || recipes.length === 0)
    return <h3>No own recipes</h3>;

  return (
    <div>
      <p className={styles.recipesCount}>{recipes.length} recipes found</p>
      <RecipesList recipes={recipes} />
    </div>
  );
};

export default MyRecipesList;
