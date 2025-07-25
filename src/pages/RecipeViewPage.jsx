import { useEffect, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchRecipesById } from "../redux/recipes/operations.js";
import {
  selectRecipesError,
  selectRecipesIsLoadingCurrentRecipe,
} from "../redux/recipes/selectors.js";

import Loader from "../components/shared/Loader/Loader";
import NotFound from "../components/RecipeViewPage/NotFound/NotFound.jsx";

const RecipeDetails = lazy(
  () => import("../components/RecipeViewPage/RecipeDetails/RecipeDetails.jsx"),
);

const RecipeViewPage = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();

  const error = useSelector(selectRecipesError);
  const isLoading = useSelector(selectRecipesIsLoadingCurrentRecipe);

  useEffect(() => {
    if (recipeId) {
      dispatch(fetchRecipesById(recipeId));
    }
  }, [dispatch, recipeId]);

  if (isLoading) return <Loader />;
  if (error) return <NotFound />;

  return (
    <Suspense fallback={<Loader />}>
      <RecipeDetails />
    </Suspense>
  );
};

export default RecipeViewPage;
