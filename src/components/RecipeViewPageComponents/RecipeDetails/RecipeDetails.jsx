// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchRecipesById } from "../../../redux/recipes/operations.js";
// import { selectRecipesIsLoading, selectRecipesError } from "../../../redux/recipes/slice.js";
import { useNavigate } from "react-router-dom";
import styles from "./RecipeDetails.module.css";
import AboutSection from "../AboutSection/AboutSection.jsx";
import GeneralInfo from "../GeneralInfo/GeneralInfo.jsx";
import IngredientsRecipeViewPage from "../IngredientsRecipeViewPage/IngredientsRecipeViewPage.jsx"
import StepsSections from "../StepsSections/StepsSections.jsx";
import Icon from "../../shared/Icon/Icon.jsx";
import NotFound from "../NotFound/NotFound.jsx";

const RecipeDetails = ({ recipe, isLoggedIn}) => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { id } = useParams();

  // const recipe = useSelector((state) => state.recipes.currentRecipe);
  // const error = useSelector(selectRecipesError);
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
   
  // useEffect(() => {
  //   if (id) {
  //     dispatch(fetchRecipesById(id));
  //   }
  // }, [dispatch, id]);
   
  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
  };
  if (!recipe || !Array.isArray(recipe.ingredients)) {
    return <NotFound />;
  }
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
          <button className={styles.saveButton}  onClick={handleFavoriteClick}>Save
          <Icon name="bookmarkicon" className={styles.icon} />
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
