import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRecipesById } from "../redux/recipes/operations.js";
import NotFound from "../components/RecipeViewPageComponents/NotFound/NotFound.jsx";
import RecipeDetails from "../components/RecipeViewPageComponents/RecipeDetails/RecipeDetails.jsx";

const RecipeViewPage = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();

  const recipe = useSelector((state) => state.recipes.currentRecipe);
  const error = useSelector(state => state.recipes.error);
  const isLoading = useSelector(state => state.recipes.isLoading);

  useEffect(() => {
    if (recipeId) {
      dispatch(fetchRecipesById(recipeId));
    }
  }, [dispatch, recipeId]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <NotFound />;
  if (!recipe) return <NotFound />;
  
  return <RecipeDetails recipe={recipe} />;
}

export default RecipeViewPage;
