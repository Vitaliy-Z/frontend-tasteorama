import styles from "./RecipeDetails.module.css";
import AboutSection from "../AboutSection/AboutSection.jsx";
import GeneralInfo from "../GeneralInfo/GeneralInfo.jsx";
import IngredientsRecipeViewPage from "../IngredientsRecipeViewPage/IngredientsRecipeViewPage.jsx"
import StepsSections from "../StepsSections/StepsSections.jsx";
import Icon from "../../Icon/Icon.jsx";

const RecipeDetails = ({ recipe }) => {
    return (
    <>
      <img
        src={recipe.thumb || recipe.imageUrl}
        alt={recipe.title}
        className={styles.recipeImage}
      />
      <h1 className={styles.title}>{recipe.title}</h1>
      <div className={styles.recipeLayout}>
        <div className={styles.generalInfobutton}>
          <GeneralInfo recipe={recipe}/>
          <button className={styles.saveButton}>Save
          <Icon name="bookmarkicon" classname={styles.icon} />
          </button>
        </div>
        <div className={styles.leftContent}>
          <AboutSection recipe={recipe}/>
          <IngredientsRecipeViewPage recipe={recipe}/>
          <StepsSections recipe={recipe}/>
         </div>
      </div>
    </>
  );
};
export default RecipeDetails;
