import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { useState } from "react";

import Icon from "../Icon/Icon.jsx";
import ErrorWhileSaving from "../../AddRecipePage/ErrorWhileSaving/ErrorWhileSaving.jsx";
import Loader from "../Loader/Loader.jsx";

import {
  fetchAddRecipesToFavorite,
  fetchDeleteRecipesFromFavorite
} from "../../../redux/recipes/operations.js";
import {
  selectLoadToFavorite,
  selectUser
} from "../../../redux/auth/selectors.js";

import css from "./RecipeCard.module.css";

export default function RecipeCard({ recipe }) {
  const { _id, title, description, thumb, time, cals } = recipe;

  const user = useSelector(selectUser);
  const loadToFavorite = useSelector(selectLoadToFavorite);
  const isFavorite = user?.favorites?.includes(_id);

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLearnMoreClick = () => {
    navigate(`/recipes/${_id}`);
  };

  const handleFavoriteClick = () => {
    if (!user) {
      setShowModal(true);
      return;
    }

    if (isFavorite) {
      dispatch(fetchDeleteRecipesFromFavorite(_id));
    } else {
      dispatch(fetchAddRecipesToFavorite(_id));
    }
  };

  return (
    <>
      <div className={css.card}>
        <img className={css.image} src={thumb} alt={title} />

        <div className={css.titleRow}>
          <h3 className={css.title}>{title}</h3>
          <span className={css.time}>
            <Icon name="clock" classname={css.icon} /> {time}
          </span>
        </div>

        <div className={css.descriptionWrapper}>
          <p className={css.description}>{description}</p>
          <p className={css.calories}>{cals ? `~${cals}` : "—"} kcal</p>
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
            disabled={loadToFavorite === _id}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            {loadToFavorite === _id ? (
              <Loader size="small" />
            ) : (
              <Icon
                name="flag"
                classname={clsx(
                  css.iconSave,
                  isFavorite && css.iconSaveFavorite
                )}
              />
            )}
          </button>
        </div>
      </div>

      {showModal && <ErrorWhileSaving onClose={() => setShowModal(false)} />}
    </>
  );
}
