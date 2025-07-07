import { lazy } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/selectors.js";

import { selectCurrentRecipes } from "../../../redux/recipes/selectors.js";

import NotFound from "../NotFound/NotFound.jsx";
import Icon from "../../shared/Icon/Icon.jsx";

const GeneralInfo = lazy(() => import("../GeneralInfo/GeneralInfo.jsx"));
const AboutSection = lazy(() => import("../AboutSection/AboutSection.jsx"));
const IngredientsRecipeViewPage = lazy(
  import("../IngredientsRecipeViewPage/IngredientsRecipeViewPage.jsx")
);
const StepsSections = lazy(() => import("../StepsSections/StepsSections.jsx"));

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
    <Suspense fallback={<Loader />}>
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
            <Icon name="bookmarkicon" className={styles.icon} />
          </button>
        </div>
        <div className={styles.leftContent}>
          <AboutSection description={recipe.description} />
          <IngredientsRecipeViewPage ingredients={recipe.ingredients} />
          <StepsSections instructions={recipe.instructions} />
        </div>
      </div>
    </Suspense>
  );
};
export default RecipeDetails;
