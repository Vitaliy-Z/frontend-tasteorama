import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRecipeById,
  clearRecipe,
  selectRecipe,
  selectLoading,
  selectError,
} from "../redux/recipesSlice.js";
import NotFound from "../components/RecipeViewPageComponents/NotFound.jsx";
import RecipeDetails from "../components/RecipeViewPageComponents/RecipeDetails.jsx";
import Loader from "../components/RecipeViewPageComponents/Loader.jsx";

const RecipeViewPage = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector(selectRecipe);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  console.log("recipeId:", recipeId);
  console.log("Recipe:", recipe);
  console.log("Loading:", isLoading);
  console.log("Error:", error);

  useEffect(() => {
    if (recipeId) {
      console.log("Dispatching fetchRecipeById with id:", recipeId);
      dispatch(fetchRecipeById(recipeId));
    }
    return () => {
      dispatch(clearRecipe());
    };
  }, [recipeId, dispatch]);
  if (isLoading) return <Loader />;
  if (error) return <NotFound />;
  if (!recipe) return <NotFound />;

  return <RecipeDetails recipe={recipe} />;
};

export default RecipeViewPage;
