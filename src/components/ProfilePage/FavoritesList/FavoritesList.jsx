import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchFavoriteRecipes } from "../../../redux/recipes/operations";
import {
  selectRecipesItems,
  selectRecipesIsLoadingFavoriteRecipes,
  selectRecipesPage,
  selectRecipesTotalItems
} from "../../../redux/recipes/selectors";
import {
  selectFilterByCategory,
  selectFilterByIngredients
} from "../../../redux/filters/selectors";
import { selectIngredients } from "../../../redux/ingredients/selectors";

import RecipesList from "../../shared/RecipesList/RecipesList.jsx";
import Loader from "../../shared/Loader/Loader.jsx";
import LoadMoreBtn from "../../MainPage/LoadMoreBtn/LoadMoreBtn.jsx";

const FavoritesList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipesItems);
  const isLoadingFavoriteRecipes = useSelector(
    selectRecipesIsLoadingFavoriteRecipes
  );
  const page = useSelector(selectRecipesPage);
  const totalItems = useSelector(selectRecipesTotalItems);
  const filterByCategory = useSelector(selectFilterByCategory);
  const filterByIngredients = useSelector(selectFilterByIngredients);
  const ingredientsList = useSelector(selectIngredients);

  useEffect(() => {
    dispatch(
      fetchFavoriteRecipes({
        page: 1
      })
    );
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(
      fetchFavoriteRecipes({
        page: page + 1
      })
    );
  };
  const filteredRecipes = recipes.filter((recipe) => {
    let match = true;
    if (filterByCategory) {
      match = match && recipe.category === filterByCategory;
    }
    if (filterByIngredients) {
      const ingredientObj = ingredientsList.find(
        (ing) => ing.name === filterByIngredients
      );
      if (!ingredientObj) return false;
      match =
        match && recipe.ingredients?.some((ing) => ing.id === ingredientObj.id);
    }
    return match;
  });

  if (isLoadingFavoriteRecipes) return <Loader />;

  if (filteredRecipes.length === 0) return <h3>No favorites recipes</h3>;

  return (
    <>
      <RecipesList recipes={filteredRecipes} />
      {filteredRecipes.length < totalItems && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </>
  );
};

export default FavoritesList;
