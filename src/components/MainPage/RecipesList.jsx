import { useState } from "react";
import css from "./RecipesList.module.css";
import recipesData from "../../api/mockData/recipes.json"; 
import RecipeCard from "../MainPage/RecipeCard";
import LoadMoreBtn from "../MainPage/LoadMoreBtn";

const PER_PAGE = 12;

const RecipesList = () => {
  const [visibleCount, setVisibleCount] = useState(PER_PAGE);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + PER_PAGE);
      setLoading(false);
    }, 500);
  };

  const visibleRecipes = recipesData.slice(0, visibleCount);

  return (
    <>
      <ul className={css.list}>
        {visibleRecipes.map((recipe) => (
          <li key={recipe._id}>
            <RecipeCard recipe={recipe} />
          </li>
        ))}
      </ul>

      {!loading && recipesData.length > visibleCount && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          Loading...
        </div>
      )}
    </>
  );
};

export default RecipesList;