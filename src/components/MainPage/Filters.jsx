import { useState, useEffect } from "react";
import { GrFilter } from "react-icons/gr";

import css from "./Filters.module.css";

const Filters = ({
  recipesCount,
  filterByCategory,
  setFilterByCategory,
  filterByIngredients,
  setFilterByIngredients,
  clearFilters,
  categories = [],
  ingredients = [],
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleReset = () => {
    clearFilters();
  };

  const handleCategoryChange = (e) => {
    setFilterByCategory(e.target.value);
  };

  const handleIngredientChange = (e) => {
    setFilterByIngredients(e.target.value);
  };

  return (
  <div>
     <div className={css.containerTitle}>
       <h1 className={css.title}>Recipes</h1>
     </div>

    <div className={css.containerTwo}>
      <p className={css.recipesCount}>{recipesCount} recipes found</p>

      {isMobile ? (
        <div className={css.filtersDropdownContainer}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className={css.dropdownButton}
          >
            <span className={css.buttonText}>Filters</span>
            <GrFilter className={css.icon} />
          </button>

          {showDropdown && (
            <div className={css.dropdownContent}>
              <button onClick={handleReset} className={css.resetButton}>
                Reset filters
              </button>

              <select
                value={filterByCategory || ""}
                onChange={handleCategoryChange}
                className={css.select}
              >
                <option value="">Category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>

              <select
                value={filterByIngredients || ""}
                onChange={handleIngredientChange}
                className={css.select}
              >
                <option value="">Ingredient</option>
                {ingredients.map((ing) => (
                  <option key={ing._id} value={ing.name}>
                    {ing.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      ) : (
        <div className={css.filtersContainer}>
          <button onClick={handleReset} className={css.resetButton}>
            Reset filters
          </button>

          <select
            value={filterByCategory || ""}
            onChange={handleCategoryChange}
            className={css.select}
          >
            <option value="">Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          <select
            value={filterByIngredients || ""}
            onChange={handleIngredientChange}
            className={css.select}
          >
            <option value="">Ingredient</option>
            {ingredients.map((ing) => (
              <option key={ing._id} value={ing.name}>
                {ing.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  </div>
);
}

export default Filters;