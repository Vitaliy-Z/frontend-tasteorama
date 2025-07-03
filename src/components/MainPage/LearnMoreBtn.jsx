import { Link } from "react-router-dom";
import css from "./LearnMoreBtn.module.css";

export default function LearnMoreBtn({ recipeId }) {
  return (
    <Link to={`/recipes/${recipeId}`} className={css.button}>
      Learn more
    </Link>
  );
}