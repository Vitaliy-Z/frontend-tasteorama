 import { useState, useEffect } from "react";

import SearchBox from "../components/MainPage/SearchBox";
import Filters from "../components/MainPage/Filters";
import RecipesList from "../components/MainPage/RecipesList";

import mockRecipes from "../api/mockData/recipes.json";
import categoriesData from "../api/mockData/categories.json";      
import ingredientsData from "../api/mockData/ingredients.json";   
const MainPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const [filterByName, setFilterByName] = useState("");
  const [filterByCategory, setFilterByCategory] = useState("");
  const [filterByIngredients, setFilterByIngredients] = useState("");

  useEffect(() => {
    setRecipes(mockRecipes);
    setCategories(categoriesData.map((cat) => cat.name));
    setIngredients(ingredientsData.map((ing) => ing.name));
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    const matchName = recipe.title.toLowerCase().includes(filterByName.toLowerCase());
    const matchCategory = filterByCategory ? recipe.category === filterByCategory : true;
    const matchIngredients = filterByIngredients
      ? recipe.ingredients.some((ing) => ing.name === filterByIngredients)
      : true;
    return matchName && matchCategory && matchIngredients;
  });

  return (
    <main>
      <SearchBox onSearch={(query) => setFilterByName(query)} />

      <Filters
        recipesCount={filteredRecipes.length}
        filterByCategory={filterByCategory}
        setFilterByCategory={setFilterByCategory}
        filterByIngredients={filterByIngredients}
        setFilterByIngredients={setFilterByIngredients}
        clearFilters={() => {
          setFilterByName("");
          setFilterByCategory("");
          setFilterByIngredients("");
        }}
        categories={categories}
        ingredients={ingredients} 
      />

      <RecipesList recipes={filteredRecipes} />
    </main>
  );
};

export default MainPage;
