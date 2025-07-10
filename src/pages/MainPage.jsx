import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRecipes, loadMoreRecipes } from "../redux/recipes/operations.js";
import { fetchCategories } from "../redux/categories/operations.js";
import { fetchIngredients } from "../redux/ingredients/operations.js";
import {
  selectRecipesItems,
  selectRecipesPage,
  selectRecipesIsLoadingAllRecipes,
  selectRecipesIsLoadingMoreRecipes,
  selectRecipesTotalItems,
} from "../redux/recipes/selectors.js";
import { selectCategoriesIsLoading } from "../redux/categories/selectors.js";
import { selectIngredientsIsLoading } from "../redux/ingredients/selectors.js";

import { selectFilterByName } from "../redux/filters/selectors.js";

import { setPage } from "../redux/recipes/slice.js";

import Loader from "../components/shared/Loader/Loader.jsx";
import SearchBox from "../components/MainPage/SearchBox/SearchBox.jsx";
import Filters from "../components/MainPage/Filters/Filters.jsx";
import RecipesList from "../components/shared/RecipesList/RecipesList.jsx";
import LoadMoreBtn from "../components/MainPage/LoadMoreBtn/LoadMoreBtn.jsx";

const MainPage = () => {
  const dispatch = useDispatch();

  const recipes = useSelector(selectRecipesItems);
  const isLoadingAllRecipes = useSelector(selectRecipesIsLoadingAllRecipes);
  const isLoadingMoreRecipes = useSelector(selectRecipesIsLoadingMoreRecipes);
  const isLoadingCategories = useSelector(selectCategoriesIsLoading);
  const isLoadingIngredients = useSelector(selectIngredientsIsLoading);
  const page = useSelector(selectRecipesPage);

  const isLoading =
    isLoadingAllRecipes ||
    isLoadingMoreRecipes ||
    isLoadingCategories ||
    isLoadingIngredients;

  const totalItems = useSelector(selectRecipesTotalItems);

  const filterByName = useSelector(selectFilterByName);

  useEffect(() => {
    dispatch(fetchRecipes());
    dispatch(fetchCategories());
    dispatch(fetchIngredients());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
    dispatch(loadMoreRecipes({ page: page + 1, title: filterByName }));
  };

  const hasMore = recipes.length < totalItems;

  return (
    <>
      <SearchBox />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Filters />
          <RecipesList recipes={recipes} />
          {hasMore && <LoadMoreBtn onClick={handleLoadMore} />}
        </>
      )}
    </>
  );
};

export default MainPage;
