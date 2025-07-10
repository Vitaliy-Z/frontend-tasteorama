import { FieldArray, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../../../redux/ingredients/operations";
import { selectIngredients } from "../../../redux/ingredients/selectors";
import Icon from "../../shared/Icon/Icon.jsx";
import styles from "./IngredientsForm.module.css";

const IngredientsForm = ({ values }) => {
  const dispatch = useDispatch();
  const allIngredients = useSelector(selectIngredients);
  const [ingredient, setIngredient] = useState({ name: "", measure: "" });

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <section className={styles.sectionIngr}>
      <h3 className={styles.sectionIngrTitle}>Ingredients</h3>

      <div className={styles.inputRow}>
        <label className="label">
          Ingredient:
          <select
            value={ingredient.name}
            onChange={(e) =>
              setIngredient({ ...ingredient, name: e.target.value })
            }
          >
            <option value="">Select ingredient</option>
            {allIngredients.map((ing) => (
              <option key={ing._id} value={ing.name}>
                {ing.name}
              </option>
            ))}
          </select>
        </label>

        <label className="label">
          Amount:
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

      <FieldArray
        name="ingredients"
        render={(arrayHelpers) => (
          <>
            <button
              type="button"
              onClick={() => {
                arrayHelpers.push(ingredient);
                setIngredient({ name: "", measure: "" });
              }}
              disabled={!ingredient.name || !ingredient.measure}
              className={styles.buttonAddingr}
            >
              Add Ingredient
            </button>

            <ErrorMessage
              name="ingredients"
              component="p"
              style={{ color: "red" }}
            />

            {values.ingredients.length > 0 && (
              <div className={styles.ingredientsTable}>
                <div className={styles.tableHeader}>
                  <span>Name:</span>
                  <span>Amount:</span>
                </div>
                <ul className={styles.ingredientsList}>
                  {values.ingredients.map((ing, index) => (
                    <li key={index} className={styles.ingrlist}>
                      <span className={styles.ingrName}>{ing.name}</span>
                      <span className={styles.ingrAmount}>{ing.measure}</span>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                        className={styles.deleteIcon}
                      >
                        <Icon name="delete" classname={styles.iconSvg} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      />
    </section>
  );
};

export default IngredientsForm;
