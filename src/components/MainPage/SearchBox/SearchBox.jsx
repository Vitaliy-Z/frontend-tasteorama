import { useSelector, useDispatch } from "react-redux";

import {
  selectFilterByName,
  selectFilterByCategory,
  selectFilterByIngredients,
} from "../../../redux/filters/selectors.js";
import { setFilterByName } from "../../../redux/filters/slice.js";
import { selectRecipesPage } from "../../../redux/recipes/selectors.js";
import { setPage } from "../../../redux/recipes/slice.js";
import { fetchRecipes } from "../../../redux/recipes/operations.js";

import css from "./SearchBox.module.css";

export const SearchBox = () => {
  const dispatch = useDispatch();

  const page = useSelector(selectRecipesPage);

  const searchQuery = useSelector(selectFilterByName);
  const filterByCategory = useSelector(selectFilterByCategory);
  const filterByIngredients = useSelector(selectFilterByIngredients);

  const handleChange = (e) => {
    dispatch(setFilterByName(e.target.value.trim()));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setPage(1));
    dispatch(
      fetchRecipes({
        page,
        title: searchQuery,
        category: filterByCategory,
        ingredients: filterByIngredients,
      }),
    );
  };

  return (
    <div className={css.hero}>
      <div className={css.wrapper}>
        <h1 className={css.title}>
          Plan, Cook, and
          <br />
          Share Your Flavors
        </h1>
        <form onSubmit={handleSearch} className={css.form}>
          <input
            type="text"
            placeholder="Search recipes"
            value={searchQuery}
            onChange={handleChange}
            className={css.input}
          />
          <button type="submit" className={css.button}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
