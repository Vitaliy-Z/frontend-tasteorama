import { useState, useEffect } from "react";
import { GrFilter } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
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
  const [isCompactView, setIsCompactView] = useState(window.innerWidth < 1440);

  useEffect(() => {
    const handleResize = () => setIsCompactView(window.innerWidth < 1440);
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
  <div className={css.wrapper}>
    <h1 className={css.title}>Recipes</h1>

    <div className={css.topBar}>
      <p className={css.recipesCount}>{recipesCount} recipes found</p>

      {isCompactView ? (
        <div className={css.filtersDropdownContainer}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className={css.dropdownButton}
          >
            <span className={css.buttonText}>Filters</span>
            {showDropdown ? (
              <AiOutlineClose className={css.icon} />
            ) : (
              <GrFilter className={css.icon} />
            )}
          </button>

          {showDropdown && (
            <div className={css.dropdownContent}>
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

              <button onClick={handleReset} className={css.resetButton}>
                Reset filters
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className={css.filtersRow}>
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
};

export default Filters;