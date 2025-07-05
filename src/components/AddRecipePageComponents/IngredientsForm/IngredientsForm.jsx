import React from "react";
import styles from "./IngredientsForm.module.css";
import Icon from "../../shared/Icon/Icon.jsx";
const IngredientsForm = ({
  ingredient,
  setIngredient,
  amount,
  setAmount,
  ingredientsList,
  addIngredient,
  removeIngredient,
  ingredientOptions,
}) => {
  return (
    <section className={styles.sectionIngr}>
      <h3>Ingredients</h3>
      <div className={styles.inputRow}>
        <label>
          Name
          <select
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          >
            <option value="">Select ingredient</option>
            {ingredientOptions.map((ing) => (
              <option key={ing} value={ing}>
                {ing}
              </option>
            ))}
          </select>
        </label>

        <label>
          Amount
          <input 
            type="text"
            placeholder="100g"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
      </div>
      <button
        className={styles.buttonAddingr}
        type="button"
        onClick={addIngredient}
      >
        Add new ingredient
      </button>
     {ingredientsList.length > 0 && (
        <>
          <div className={styles.ingredientsTable}>
            <div className={styles.tableHeader}>
              <span>Name:</span>
              <span>Amount:</span>
            </div>
            <ul className={styles.ingredientsList}>
              {ingredientsList.map((ing, index) => (
                <li className={styles.ingrlist} key={index}>
                  <span className={styles.ingrName}>{ing.name}</span>
                  <span className={styles.ingrAmount}>{ing.amount}</span>
                   <button
        className={styles.deleteIcon}
        type="button"
        onClick={() => removeIngredient(index)}
        aria-label="Remove ingredient">
        <Icon name="delete" classname={styles.iconSvg} />
      </button>
                </li>
              ))}
            </ul>
          </div>
          <button
            className={styles.removeIngr}
            type="button"
            onClick={() => removeIngredient(ingredientsList.length - 1)}
            disabled={ingredientsList.length === 0}
          >
            Remove last Ingredient
          </button>
        </>
      )}
    </section>
  );
};
export default IngredientsForm;