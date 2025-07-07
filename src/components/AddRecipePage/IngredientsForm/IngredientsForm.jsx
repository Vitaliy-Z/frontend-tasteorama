import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../../../redux/ingredients/operations";
import { selectIngredients } from "../../../redux/ingredients/selectors";
import Icon from "../../shared/Icon/Icon.jsx";

import styles from "./IngredientsForm.module.css";

const IngredientsForm = ({
  ingredients,
  onAddIngredient,
  onRemoveIngredient
}) => {
  const [ingredient, setIngredient] = useState({ name: "", measure: "" });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const ingredientOptions = useSelector(selectIngredients);

  const handleAddIngredient = () => {
    if (ingredient.name !== "" && ingredient.measure !== "") {
      onAddIngredient(ingredient);
      setIngredient({ name: "", measure: "" });
    }
  };

  return (
    <section className={styles.sectionIngr}>
      <h3>Ingredients</h3>
      <div className={styles.inputRow}>
        <label>
          Name
          <select
            value={ingredient.name}
            onChange={(e) =>
              setIngredient({ ...ingredient, name: e.target.value })
            }
          >
            <option value="">Select ingredient</option>
            {ingredientOptions.map((ing) => (
              <option key={ing._id} value={ing.name}>
                {ing.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Amount
          <input
            type="text"
            placeholder="100g"
            value={ingredient.measure}
            onChange={(e) =>
              setIngredient({ ...ingredient, measure: e.target.value })
            }
          />
        </label>
      </div>
      <button
        className={styles.buttonAddingr}
        type="button"
        onClick={handleAddIngredient}
        disabled={ingredient.name === "" || ingredient.measure === ""}
      >
        Add new ingredient
      </button>
      {ingredients.length > 0 && (
        <>
          <div className={styles.ingredientsTable}>
            <div className={styles.tableHeader}>
              <span>Name:</span>
              <span>Amount:</span>
            </div>
            <ul className={styles.ingredientsList}>
              {ingredients.map((ing, index) => (
                <li className={styles.ingrlist} key={index}>
                  <span className={styles.ingrName}>{ing.name}</span>
                  <span className={styles.ingrAmount}>{ing.measure}</span>
                  <button
                    className={styles.deleteIcon}
                    type="button"
                    onClick={() => onRemoveIngredient(index)}
                    aria-label="Remove ingredient"
                  >
                    <Icon name="delete" classname={styles.iconSvg} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button
            className={styles.removeIngr}
            type="button"
            onClick={() => {
              onRemoveIngredient(ingredients.length - 1);
              setIngredient({ name: "", measure: "" });
            }}
            disabled={ingredients.length === 0}
          >
            Remove last Ingredient
          </button>
        </>
      )}
    </section>
  );
};
export default IngredientsForm;
