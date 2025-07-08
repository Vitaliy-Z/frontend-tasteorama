import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRecipes, loadMoreRecipes } from "../redux/recipes/operations";
import { fetchCategories } from "../redux/categories/operations";
import { fetchIngredients } from "../redux/ingredients/operations";
import {
  selectRecipesItems,
  selectRecipesPage,
  selectRecipesIsLoadingAllRecipes,
  selectRecipesIsLoadingMoreRecipes
} from "../redux/recipes/selectors.js";
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
  const page = useSelector(selectRecipesPage);

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

  return (
    <>
      <SearchBox />
      <Filters />
      {isLoadingAllRecipes ? <Loader /> : <RecipesList recipes={recipes} />}

      {isLoadingMoreRecipes ? (
        <Loader />
      ) : (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </>
  );
};

export default MainPage;
