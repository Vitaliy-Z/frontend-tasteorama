import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/selectors.js";

import { selectCurrentRecipes } from "../../../redux/recipes/selectors.js";
import {
  fetchAddRecipesToFavorite,
  fetchDeleteRecipesFromFavorite,
} from "../../../redux/recipes/operations";

import NotFound from "../NotFound/NotFound.jsx";
import Icon from "../../shared/Icon/Icon.jsx";

import GeneralInfo from "../GeneralInfo/GeneralInfo.jsx";
import AboutSection from "../AboutSection/AboutSection.jsx";
import IngredientsRecipeViewPage from "../IngredientsRecipeViewPage/IngredientsRecipeViewPage.jsx";
import StepsSections from "../StepsSections/StepsSections.jsx";

import styles from "./RecipeDetails.module.css";
import clsx from "clsx";

const RecipeDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectUser);
  const user = useSelector(selectUser);
  const recipe = useSelector(selectCurrentRecipes);

  if (!recipe) return <NotFound />;

  const isFavorite = user?.favorites?.includes(recipe._id);

  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      navigate("/auth/login");
      return;
    }
    if (isFavorite) {
      dispatch(fetchDeleteRecipesFromFavorite(recipe._id));
    } else {
      dispatch(fetchAddRecipesToFavorite(recipe._id));
    }
  };

  return (
    <>
      <img
        src={recipe.thumb || recipe.imageUrl}
        alt={recipe.title}
        className={styles.recipeImage}
        loading="lazy"
      />
      <h1 className={styles.title}>{recipe.title}</h1>
      <div className={styles.recipeLayout}>
        <div className={styles.generalInfobutton}>
          <GeneralInfo category={recipe.category} time={recipe.time} />
          <button
            type="button"
            className={styles.saveButton}
            onClick={handleFavoriteClick}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            Save
            <Icon
              name="bookmarkicon"
              classname={clsx(
                styles.icon,
                isFavorite && styles.iconSaveFavorite,
              )}
            />
          </button>
        </div>
        <div className={styles.leftContent}>
          <AboutSection description={recipe.description} />
          <IngredientsRecipeViewPage ingredients={recipe.ingredients} />
          <StepsSections instructions={recipe.instructions} />
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
