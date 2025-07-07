import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/selectors.js";

import { selectCurrentRecipes } from "../../../redux/recipes/selectors.js";

import NotFound from "../NotFound/NotFound.jsx";
import Icon from "../../shared/Icon/Icon.jsx";

import GeneralInfo from "../GeneralInfo/GeneralInfo.jsx";
import AboutSection from "../AboutSection/AboutSection.jsx";
import IngredientsRecipeViewPage from "../IngredientsRecipeViewPage/IngredientsRecipeViewPage.jsx";
import StepsSections from "../StepsSections/StepsSections.jsx";

import styles from "./RecipeDetails.module.css";

const RecipeDetails = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectUser);
  const recipe = useSelector(selectCurrentRecipes);

  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
  };

  if (!recipe) return <NotFound />;

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
          <button className={styles.saveButton} onClick={handleFavoriteClick}>
            Save
            <Icon name="bookmarkicon" classname={styles.icon} />
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
