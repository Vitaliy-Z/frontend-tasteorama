import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRecipesById } from "../redux/recipes/operations.js";
import {
  selectCurrentRecipes,
  selectRecipesError,
  selectRecipesIsLoading
} from "../redux/recipes/selectors.js";
import NotFound from "../components/RecipeViewPage/NotFound/NotFound.jsx";
import RecipeDetails from "../components/RecipeViewPage/RecipeDetails/RecipeDetails.jsx";
import Loader from "../components/shared/Loader/Loader";

const RecipeViewPage = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();

  const recipe = useSelector(selectCurrentRecipes);
  const error = useSelector(selectRecipesError);
  const isLoading = useSelector(selectRecipesIsLoading);

  useEffect(() => {
    if (recipeId) {
      dispatch(fetchRecipesById(recipeId));
    }
  }, [dispatch, recipeId]);

  if (isLoading) return <Loader />;
  if (error) return <NotFound />;
  if (!recipe) return <NotFound />;

  return <RecipeDetails recipe={recipe} />;
};

export default RecipeViewPage;
