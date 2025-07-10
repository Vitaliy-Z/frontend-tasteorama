import PropTypes from "prop-types";
import RecipeCard from "../RecipeCard/RecipeCard.jsx";
import css from "./RecipesList.module.css";
import ScrollToTopButton from "../ButtonUp/ButtonUp";

const RecipesList = ({ recipes }) => {
  return (
    <>
      <ul className={css.list}>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <RecipeCard recipe={recipe} />
          </li>
        ))}
      </ul>
      <ScrollToTopButton />
    </>
  );
};

RecipesList.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default RecipesList;
