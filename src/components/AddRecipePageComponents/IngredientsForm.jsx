import React from "react";

const IngredientsForm = ({ ingredient, setIngredient, amount, setAmount, ingredientsList, addIngredient, removeIngredient }) => {
  return (
    <section>
      <h3>Ingredients</h3>
      <select value={ingredient} onChange={(e) => setIngredient(e.target.value)}>
        <option value="">Select ingredient</option>
        <option value="Broccoli">Broccoli</option>
        <option value="Eggs">Eggs</option>
      </select>
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="button" onClick={addIngredient}>Add new ingredient</button>

      <ul>
        {ingredientsList.map((ing, index) => (
          <li key={index}>
            {ing.name} - {ing.amount}
            <button type="button" onClick={() => removeIngredient(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientsForm;
