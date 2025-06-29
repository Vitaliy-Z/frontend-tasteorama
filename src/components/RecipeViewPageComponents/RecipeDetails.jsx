import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import styles from "./RecipeDetails.module.css";
// import { toggleFavorite } from "../../redux/recipesSlice";
// import { selectIsLoggedIn } from "../../redux/useAuth";
import BookmarkIcon from "./BookmarkIcon.jsx";
import AboutSection from "./AboutSection.jsx";
import GeneralInfo from "./GeneralInfo.jsx";
import IngredientsRecipeViewPage from "./IngredientsRecipeViewPage.jsx"
import StepsSections from "./StepsSections.jsx";
const RecipeDetails = ({ recipe }) => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  // if (!recipe || !Array.isArray(recipe.ingredients)) {
  //   return <NotFound />;
  // }
  // const handleFavoriteClick = () => {
  //   if (!isLoggedIn) {
  //     navigate("/login");
  //     return;
  //   }
  //   try {
  //     dispatch(toggleFavorite(recipe._id));
  //   } catch (err) {}
  // };
  
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
          {/* <button onClick={handleFavoriteClick} className={styles.saveButton}>
            {recipe.isFavorite ? "Remove" : "Save"}
            <BookmarkIcon/>
          </button> */}
          <button className={styles.saveButton}>Save
          <BookmarkIcon/>
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
