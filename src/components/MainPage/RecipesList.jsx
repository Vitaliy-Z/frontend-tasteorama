import css from "./RecipesList.module.css";
import RecipeCard from "../MainPage/RecipeCard";

const RecipesList = ({ recipes }) => {
  return (
    <ul className={css.list}>
      {recipes.map((recipe) => (
        <li key={recipe._id}>
          <RecipeCard recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};

export default RecipesList;