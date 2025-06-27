import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipeById } from "../redux/recipesSlice";
import {
  selectRecipe,
  selectLoading,
  selectError,
} from "../redux/recipesSlice.js";
import NotFound from "../components/RecipeViewPageComponents/NotFound.jsx";
import RecipeDetails from "../components/RecipeViewPageComponents/RecipeDetails.jsx";
import Loader from "../components/RecipeViewPageComponents/Loader.jsx";

const RecipeViewPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector(selectRecipe);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  console.log("Recipe:", recipe);
  console.log("Loading:", isLoading);
  console.log("Error:", error);

  useEffect(() => {
    console.log("Fetching recipe with id:", id);
    dispatch(fetchRecipeById(id));
  }, [id, dispatch]);

  if (isLoading) return <Loader />;
  if (error) return <NotFound />;
  if (!recipe) return <NotFound />;

  return <RecipeDetails recipe={recipe} />;
};

export default RecipeViewPage;
