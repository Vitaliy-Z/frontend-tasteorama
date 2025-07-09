import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../redux/categories/operations";
import { selectCategories } from "../../../redux/categories/selectors";

import styles from "./GeneralInfoForm.module.css";

const GeneralInfoForm = ({ recipe, setRecipe }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const categories = useSelector(selectCategories);

  return (
    <section className={styles.sectionGeneralInfo}>
      <h3>General Information</h3>
      <label>
        Recipe Title
        <input
          className={styles.inputTitle}
          type="text"
          placeholder="Enter the name of your recipe"
          value={recipe.name}
          onChange={(e) =>
            setRecipe((state) => ({ ...state, name: e.target.value }))
          }
        />
      </label>
      <label>
        Recipe Description
        <textarea
          placeholder="Enter a brief description of your recipe"
          value={recipe.decr}
          onChange={(e) =>
            setRecipe((state) => ({ ...state, decr: e.target.value }))
          }
        />
      </label>
      <label>
        Cooking time in minutes
        <input
          className={styles.inputCookin}
          type="number"
          value={recipe.cookiesTime}
          onChange={(e) =>
            setRecipe((state) => ({
              ...state,
              cookiesTime: Number(e.target.value),
            }))
          }
        />
      </label>
      <div className={styles.row}>
        <label>
          Calories
          <input
            type="number"
            placeholder="150"
            value={recipe.cals}
            onChange={(e) =>
              setRecipe((state) => ({
                ...state,
                cals: Number(e.target.value),
              }))
            }
          />
        </label>

        <label>
          Category
          <select
            value={recipe.category ?? "Choose category"}
            onChange={(e) =>
              setRecipe((state) =>
                e.target.value !== ""
                  ? { ...state, category: e.target.value }
                  : { ...state, category: null },
              )
            }
          >
            <option value={""}>Choose category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
};

export default GeneralInfoForm;
