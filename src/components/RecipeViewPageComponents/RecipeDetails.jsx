import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./RecipeDetails.module.css";
import { toggleFavorite } from "../../redux/recipesSlice";
import { selectIsLoggedIn } from "../../redux/useAuth";
import ingredientsData from "../../api/mockData/ingredients.json";
import categoriesData from "../../api/mockData/categories.json";
import NotFound from "../RecipeViewPageComponents/NotFound.jsx";

const RecipeDetails = ({ recipe }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!recipe || !Array.isArray(recipe.ingredients)) {
    return <NotFound />;
  }
  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    try {
      dispatch(toggleFavorite(recipe._id));
    } catch (err) {
      // handle error
    }
  };
  const categoryTitle =
    categoriesData.find((c) => c._id === recipe.category)?.name ||
    recipe.category;
  return (
    <div className={styles.recipeContainer}>
      <img
        src={recipe.thumb || recipe.imageUrl}
        alt={recipe.title}
        className={styles.recipeImage}
      />
      <h1 className={styles.title}>{recipe.title}</h1>
      <div className={styles.generalInfo}>
        <h3 className={styles.recipeinform}>General informations</h3>
        <p>
          <strong>Category:</strong> {categoryTitle}
        </p>
        <p>
          <strong>Cooking time:</strong> {recipe.time} minutes
        </p>
      </div>
      <button onClick={handleFavoriteClick} className={styles.saveButton}>
        {recipe.isFavorite ? "Remove" : "Save"}
      </button>
      <section className={styles.section}>
        <h2>About recipe</h2>
        <p>{recipe.description}</p>
      </section>
      <section className={styles.section}>
        <h2>Ingredients:</h2>
        <ul className={styles.ingredientsList}>
          {recipe.ingredients.map((item, i) => {
            const ingredient = ingredientsData.find(
              (ing) => ing._id === item.id
            );
            return (
              <li key={item.id}>
                {ingredient ? (
                  <>
                    <strong>{ingredient.name}</strong> — {item.measure}
                  </>
                ) : (
                  <>Unknown ingredient — {item.measure}</>
                )}
              </li>
            );
          })}
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Preparation Steps:</h2>
        <ul className={styles.steps}>
          {recipe.instructions
            .split(/\r?\n/)
            .filter((step) => step.trim())
            .map((step, i) => (
              <li key={i}>{step.trim()}</li>
            ))}
        </ul>
      </section>
    </div>
  );
};
export default RecipeDetails;
