import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import Icon from "../Icon/Icon.jsx";

import css from "./RecipeCard.module.css";

import {
  fetchAddRecipesToFavorite,
  fetchDeleteRecipesFromFavorite
} from "../../../redux/recipes/operations";
import { selectUser } from "../../../redux/auth/selectors.js";

export default function RecipeCard({ recipe }) {
  const { _id, title, description, thumb, time, calories } = recipe;

  const user = useSelector(selectUser);

  const isFavorite = user?.favorites?.includes(_id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLearnMoreClick = () => {
    navigate(`/recipes/${_id}`);
  };

  const handleFavoriteClick = () => {
    if (!user) {
      navigate("/auth/login");
      return;
    }
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
          <Icon name="clock" classname={css.icon} /> {time}
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
          className={css.favoriteBtn}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Icon
            name="flag"
            classname={clsx(css.iconSave, isFavorite && css.iconSaveFavorite)}
          />
        </button>
      </div>
    </div>
  );
}
