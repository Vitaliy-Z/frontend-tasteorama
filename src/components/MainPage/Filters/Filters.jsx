import { useState, useEffect } from "react";
import { GrFilter } from "react-icons/gr";
import { AiOutlineCloseCircle } from "react-icons/ai";

// import { AiOutlineClose } from "react-icons/ai";
import css from "./Filters.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRecipesPage,
  selectRecipesTotalItems
} from "../../../redux/recipes/selectors.js";
import {
  selectFilterByCategory,
  selectFilterByIngredients,
  selectFilterByName
} from "../../../redux/filters/selectors.js";
import {
  setFilterByCategory,
  setFilterByIngredients
} from "../../../redux/filters/slice.js";
import { selectCategories } from "../../../redux/categories/selectors.js";
import { selectIngredients } from "../../../redux/ingredients/selectors.js";
import { fetchRecipes } from "../../../redux/recipes/operations.js";

const Filters = ({ hideTitle }) => {
  const dispatch = useDispatch();

  const [showDropdown, setShowDropdown] = useState(false);
  const [isCompactView, setIsCompactView] = useState(window.innerWidth < 1440);

  const recipesCount = useSelector(selectRecipesTotalItems);

  const filterByCategory = useSelector(selectFilterByCategory);
  const filterByIngredients = useSelector(selectFilterByIngredients);

  const categories = useSelector(selectCategories);
  const ingredients = useSelector(selectIngredients);

  const searchQuery = useSelector(selectFilterByName);
  const page = useSelector(selectRecipesPage);

  useEffect(() => {
    const handleResize = () => setIsCompactView(window.innerWidth < 1440);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleReset = () => {
    dispatch(setFilterByCategory(""));
    dispatch(setFilterByIngredients(""));
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    dispatch(setFilterByCategory(category));
    dispatch(
      fetchRecipes({
        page,
        title: searchQuery,
        category,
        ingredients: filterByIngredients
      })
    );
  };

  const handleIngredientChange = (e) => {
    const ingredient = e.target.value;
    dispatch(setFilterByIngredients(ingredient));
    dispatch(
      fetchRecipes({
        page,
        title: searchQuery,
        category: filterByCategory,
        ingredients: ingredient
      })
    );
  };

  return (
    <div className={css.wrapper}>
      {!hideTitle && <h2 className={css.title}>Recipes</h2>}

      <div className={css.topBar}>
        {!hideTitle && (
          <p className={css.recipesCount}>{recipesCount} recipes found</p>
        )}

        {isCompactView ? (
          <div className={css.filtersDropdownContainer}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className={css.dropdownButton}
            >
              <span className={css.buttonText}>Filters</span>
              {showDropdown ? (
                <AiOutlineCloseCircle className={css.icon} />
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
