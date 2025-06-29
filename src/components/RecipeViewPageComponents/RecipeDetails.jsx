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
    } catch (err) {}
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
      <div className={styles.recipeLayout}>
        <div className={styles.generalInfobutton}>
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
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.3077 0.5C16.0969 0.5 15.1154 1.40642 15.1154 2.52455V18.0352C15.1154 19.2421 13.7364 19.9293 12.7734 19.2023L8.68811 16.1178C8.16703 15.7244 7.44835 15.7244 6.92727 16.1178L2.84196 19.2023C1.87902 19.9293 0.5 19.2421 0.5 18.0352V2.69327C0.5 1.48196 1.42876 0.5 2.57444 0.5H17.3077ZM17.3077 0.5C18.5185 0.5 19.5 1.40642 19.5 2.52455V5.61762C19.5 6.42516 18.8456 7.0798 18.0385 7.0798H15.1154"
                stroke="white"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div className={styles.leftContent}>
          <section className={styles.sectionabout}>
            <h2>About recipe</h2>
            <p className={styles.textabout}>{recipe.description}</p>
          </section>
          <section className={styles.sectioningredients}>
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
          <section className={styles.sectionsteps}>
            <h2>Preparation Steps:</h2>
            <ul className={styles.steps}>
              {recipe.instructions
                .split(/\r?\n/)
                .filter((step) => step.trim())
                .map((step, i) => (
                  <li key={i} className={styles.stepItem}>{step.trim()}</li>
                ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
export default RecipeDetails;
