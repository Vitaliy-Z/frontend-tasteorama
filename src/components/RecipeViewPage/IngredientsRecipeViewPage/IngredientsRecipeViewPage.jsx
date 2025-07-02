import styles from "./IngredientsRecipeViewPage.module.css";
import ingredientsData from "../../../api/mockData/ingredients.json";

const IngredientsRecipeViewPage = ({ ingredients = [] }) => {
  return (
    <div className={styles.sectioningredients}>
      <h2>Ingredients:</h2>
      <ul className={styles.ingredientsList}>
        {ingredients.length > 0 &&
          ingredients.map((item) => {
            const ingredient = ingredientsData.find(
              (ing) => ing._id === item.id
            );
            return (
              <li key={item.id}>
                <p>
                  <span className={styles.ingname}>{ingredient.name} - </span>
                  {item.measure}
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default IngredientsRecipeViewPage;
