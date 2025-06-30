import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../components/RecipeViewPageComponents/NotFound/NotFound.jsx";
import RecipeDetails from "../components/RecipeViewPageComponents/RecipeDetails/RecipeDetails.jsx";
import Loader from "../components/RecipeViewPageComponents/Loader.jsx";
import recipes from '../api/mockData/recipes.json'
const RecipeViewPage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
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
  
  return <RecipeDetails recipe={recipe} />;
}

export default RecipeViewPage;
