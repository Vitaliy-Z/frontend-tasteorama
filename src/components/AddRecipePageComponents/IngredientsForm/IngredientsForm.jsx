import React from "react";
import styles from "./IngredientsForm.module.css";

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
    <section>
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
      <button className={styles.buttonAddingr}type="button" onClick={addIngredient}>
        Add new ingredient
      </button>
      <div className={styles.tableHeader}>
        <span>Name:</span>
        <span>Amount:</span>
      </div>

      <ul>
        {ingredientsList.map((ing, index) => (
          <li key={index}>
            {ing.name} - {ing.amount}
            <button type="button" onClick={() => removeIngredient(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientsForm;
