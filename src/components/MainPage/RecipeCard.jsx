import { useNavigate } from "react-router-dom";
import css from "./RecipeCard.module.css";

import FavoriteBtn from "../MainPage/SaveIcon.jsx";
import LearnMoreBtn from "../MainPage/LearnMoreBtn.jsx";
import { BsClock } from "react-icons/bs";

export default function RecipeCard({ recipe }) {
  const { _id, title, description, thumb, time, calories, isFavorite } = recipe;

  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate(`/recipes/${_id}`);
  };

  const handleFavoriteClick = () => {
    alert("Please log in to add to favorites");
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
          {calories ? `~${calories} cals` : " — cals"}
        </p>
      </div>
      <div className={css.actions}>
        <LearnMoreBtn onClick={handleLearnMoreClick} />
        <FavoriteBtn
          recipeId={_id}
          isInitiallyFavorite={isFavorite}
          onClick={handleFavoriteClick}
        />
      </div>
    </div>
  );
}