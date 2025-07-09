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

  const [ingredient, setIngredient] = useState({ name: "", measure: "" });

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <section className={styles.sectionIngr}>
      <h3>Ingredients</h3>
      <div className={styles.inputRow}>
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

        <input
          type="text"
          placeholder="100g"
          value={ingredient.measure}
          onChange={(e) =>
            setIngredient({ ...ingredient, measure: e.target.value })
          }
        />
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
              component="div"
              className={styles.error}
            />

            {values.ingredients.length > 0 && (
              <ul className={styles.ingredientsList}>
                {values.ingredients.map((ing, index) => (
                  <li key={index} className={styles.ingrlist}>
                    <span>{ing.name}</span>
                    <span>{ing.measure}</span>
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
            )}
          </>
        )}
      />
    </section>
  );
};

export default IngredientsForm;
