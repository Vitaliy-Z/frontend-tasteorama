import { useState, useEffect } from "react";

import SearchBox from "../components/MainPage/SearchBox";
import Filters from "../components/MainPage/Filters";
import RecipesList from "../components/MainPage/RecipesList";
import LoadMoreBtn from "../components/MainPage/LoadMoreBtn";

import mockRecipes from "../api/mockData/recipes.json";
import categoriesData from "../api/mockData/categories.json";
import ingredientsData from "../api/mockData/ingredients.json";

const PER_PAGE = 12;

const MainPage = () => {

  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const [filterByName, setFilterByName] = useState("");
  const [filterByCategory, setFilterByCategory] = useState("");
  const [filterByIngredients, setFilterByIngredients] = useState("");

  const [visibleCount, setVisibleCount] = useState(PER_PAGE);

  useEffect(() => {
    setRecipes(mockRecipes);
    setCategories(categoriesData);       
    setIngredients(ingredientsData);     
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    const matchName = recipe.title.toLowerCase().includes(filterByName.toLowerCase());
    const matchCategory = filterByCategory ? recipe.category === filterByCategory : true;
    const matchIngredients = filterByIngredients
      ? recipe.ingredients.some((ing) => ing.name === filterByIngredients)
      : true;
    return matchName && matchCategory && matchIngredients;
  });

  const visibleRecipes = filteredRecipes.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PER_PAGE);
  };

  const handleClearFilters = () => {
    setFilterByName("");
    setFilterByCategory("");
    setFilterByIngredients("");
    setVisibleCount(PER_PAGE);
  };

  return (
    <main>
      <SearchBox
        onSearch={(query) => {
          setFilterByName(query);
          setVisibleCount(PER_PAGE);
        }}
      />

      <Filters
        recipesCount={filteredRecipes.length}
        filterByCategory={filterByCategory}
        setFilterByCategory={setFilterByCategory}
        filterByIngredients={filterByIngredients}
        setFilterByIngredients={setFilterByIngredients}
        clearFilters={handleClearFilters}
        categories={categories}
        ingredients={ingredients}
      />

      {visibleRecipes.length > 0 ? (
        <>
          <RecipesList recipes={visibleRecipes} />

          {visibleRecipes.length < filteredRecipes.length && (
            <LoadMoreBtn onClick={handleLoadMore} />
          )}
        </>
      ) : (
        <p>Recipe not found</p>
      )}
    </main>
  );
};

export default MainPage;
