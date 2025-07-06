import { FieldArray, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../../../redux/ingredients/operations";
import { selectIngredients } from "../../../redux/ingredients/selectors";
import Icon from "../../shared/Icon/Icon.jsx";
import styles from "./IngredientsForm.module.css";

const IngredientsForm = ({ values, setFieldValue }) => {
  const dispatch = useDispatch();
  const allIngredients = useSelector(selectIngredients);
  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const [ingredient, setIngredient] = useState({ name: "", measure: "" });

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
            {allIngredients.map((ing) => (
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

      <FieldArray
        name="ingredients"
        render={(arrayHelpers) => (
          <>
            <button
              className={styles.buttonAddingr}
              type="button"
              onClick={() => {
                arrayHelpers.push(ingredient);
                setIngredient({ name: "", measure: "" });
              }}
              disabled={!ingredient.name || !ingredient.measure}
            >
              Add new ingredient
            </button>

            <ErrorMessage name="ingredients" component="div" className={styles.error} />

            {values.ingredients.length > 0 && (
              <div className={styles.ingredientsTable}>
                <div className={styles.tableHeader}>
                  <span>Name:</span>
                  <span>Amount:</span>
                </div>
                <ul className={styles.ingredientsList}>
                  {values.ingredients.map((ing, index) => (
                    <li className={styles.ingrlist} key={index}>
                      <span className={styles.ingrName}>{ing.name}</span>
                      <span className={styles.ingrAmount}>{ing.measure}</span>
                      <button
                        className={styles.deleteIcon}
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
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
