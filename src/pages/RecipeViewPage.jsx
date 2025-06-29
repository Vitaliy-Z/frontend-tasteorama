import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchRecipeById,
//   clearRecipe,
//   selectRecipe,
//   selectLoading,
//   selectError,
// } from "../redux/recipesSlice.js";
import NotFound from "../components/RecipeViewPageComponents/NotFound.jsx";
import RecipeDetails from "../components/RecipeViewPageComponents/RecipeDetails.jsx";
import Loader from "../components/RecipeViewPageComponents/Loader.jsx";
import recipes from '../api/mockData/recipes.json'
const RecipeViewPage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  // const dispatch = useDispatch();
  // const recipe = useSelector(selectRecipe);
  // const isLoading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  useEffect(() => {
    setIsLoading(true);
    setError(false);

    
    const foundRecipe = recipes.find(r => r._id === recipeId);

    if (foundRecipe) {
      setRecipe(foundRecipe);
      setIsLoading(false);
    } else {
      setError(true);
      setIsLoading(false);
    }
  }, [recipeId]);

  if (isLoading) return <Loader />;
  if (error) return <NotFound />;
  if (!recipe) return <NotFound />;
  //   if (recipeId) {
  //     dispatch(fetchRecipeById(recipeId));
  //   }
  //   return () => {
  //     dispatch(clearRecipe());
  //   };
  // }, [recipeId, dispatch]);
  // if (isLoading) return <Loader />;
  // if (error) return <NotFound />;
  // if (!recipe) return <NotFound />;

  return <RecipeDetails recipe={recipe} />;
}

export default RecipeViewPage;
