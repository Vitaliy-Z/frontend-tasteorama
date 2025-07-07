import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import css from "./RecipeCard.module.css";
import { BsClock } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { RiDeleteBin4Line } from "react-icons/ri";

import {
  fetchAddRecipesToFavorite,
  fetchDeleteRecipesFromFavorite
} from "../../../redux/recipes/operations";

export default function RecipeCard({ recipe }) {
  const { _id, title, description, thumb, time, calories, isFavorite } = recipe;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLearnMoreClick = () => {
    navigate(`/recipes/${_id}`);
  };

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(fetchDeleteRecipesFromFavorite(_id));
    } else {
      dispatch(fetchAddRecipesToFavorite(_id));
    }
  };

  return (
    <div className={css.card}>
      <img className={css.image} src={thumb} alt={title} />

      <div className={css.titleRow}>
        <h3 className={css.title}>{title}</h3>
        <span className={css.time}>
          <BsClock className={css.icon} /> {time}
        </span>
      </div>

      <div>
        <p className={css.description}>{description}</p>
        <p className={css.calories}>
          {calories ? `~${calories} kcal` : "— kcal"}
        </p>
      </div>

      <div className={css.actions}>
        <button
          type="button"
          className={css.learnMoreBtn}
          onClick={handleLearnMoreClick}
        >
          Learn More
        </button>

        <button
          type="button"
          className={`${css.favoriteBtn} ${isFavorite ? css.active : ""}`}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? <RiDeleteBin4Line /> : <FaRegBookmark />}
        </button>
      </div>
    </div>
  );
}
