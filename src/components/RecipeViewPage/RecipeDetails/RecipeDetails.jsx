import { useNavigate } from "react-router-dom";
import styles from "./RecipeDetails.module.css";
import AboutSection from "../AboutSection/AboutSection.jsx";
import GeneralInfo from "../GeneralInfo/GeneralInfo.jsx";
import IngredientsRecipeViewPage from "../IngredientsRecipeViewPage/IngredientsRecipeViewPage.jsx";
import StepsSections from "../StepsSections/StepsSections.jsx";
import Icon from "../../shared/Icon/Icon.jsx";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/selectors.js";

const RecipeDetails = ({ recipe }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectUser);
  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
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
    </>
  );
};
export default RecipeDetails;
