import styles from "./IngredientsRecipeViewPage.module.css";
import ingredientsData from "../../api/mockData/ingredients.json";

const IngredientsRecipeViewPage =  ({recipe})=> {
  return (
  <div className={styles.sectioningredients}>
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
                        <p><span className={styles.ingname}>{ingredient.name}</span> — {item.measure}</p>
                      </>
                    ) : (
                      <>Unknown ingredient — {item.measure}</>
                    )}
                  </li>
                );
              })}
            </ul>
            </div>
          
)}
export default IngredientsRecipeViewPage;