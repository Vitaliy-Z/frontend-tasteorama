import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchOwnRecipes } from "../../../redux/recipes/operations";
import {
  selectRecipesItems,
  selectRecipesIsLoadingOwnRecipes,
  selectRecipesPage,
  selectRecipesTotalItems
} from "../../../redux/recipes/selectors";
import {
  selectFilterByCategory,
  selectFilterByIngredients
} from "../../../redux/filters/selectors";

import RecipesList from "../../shared/RecipesList/RecipesList.jsx";
import Loader from "../../shared/Loader/Loader.jsx";
import LoadMoreBtn from "../../MainPage/LoadMoreBtn/LoadMoreBtn.jsx";

const MyRecipesList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipesItems);
  console.log(" recipes:", recipes);
  const isLoadingOwnRecipes = useSelector(selectRecipesIsLoadingOwnRecipes);
  const page = useSelector(selectRecipesPage);
  const totalItems = useSelector(selectRecipesTotalItems);
  const filterByCategory = useSelector(selectFilterByCategory);
  const filterByIngredients = useSelector(selectFilterByIngredients);

  useEffect(() => {
    dispatch(
      fetchOwnRecipes({
        page: 1,
        category: filterByCategory || undefined,
        ingredients: filterByIngredients || undefined
      })
    );
  }, [dispatch, filterByCategory, filterByIngredients]);

  const handleLoadMore = () => {
    dispatch(
      fetchOwnRecipes({
        page: page + 1,
        category: filterByCategory || undefined,
        ingredients: filterByIngredients || undefined
      })
    );
  };

  if (isLoadingOwnRecipes) return <Loader />;
  if (recipes.length === 0) return <h3>No own recipes</h3>;

  return (
    <>
      <RecipesList recipes={recipes} />
      {recipes.length < totalItems && <LoadMoreBtn onClick={handleLoadMore} />}
    </>
  );
};

export default MyRecipesList;
