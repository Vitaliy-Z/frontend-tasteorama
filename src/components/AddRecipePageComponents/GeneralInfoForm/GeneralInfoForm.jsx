import { ErrorMessage } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../redux/categories/operations";
import { selectCategories } from "../../../redux/categories/selectors";
import styles from "./GeneralInfoForm.module.css";

const GeneralInfoForm = ({ values, setFieldValue }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <section className={styles.sectionGeneralInfo}>
      <h3>General Information</h3>

      <label>
        Recipe Title
        <input
          className={styles.inputTitle}
          type="text"
          name="title"
          value={values.title}
          onChange={(e) => setFieldValue("title", e.target.value)}
        />
      </label>
      <ErrorMessage name="title" component="div" className={styles.error} />

      <label>
        Recipe Description
        <textarea
          name="description"
          value={values.description}
          onChange={(e) => setFieldValue("description", e.target.value)}
        />
      </label>
      <ErrorMessage name="description" component="div" className={styles.error} />

      <label>
        Cooking time in minutes
        <input
          className={styles.inputCookin}
          type="number"
          value={values.time}
          onChange={(e) => setFieldValue("time", e.target.value)}
        />
      </label>
      <ErrorMessage name="time" component="div" className={styles.error} />

      <div className={styles.row}>
        <label>
          Calories
          <input
            type="text"
            value={values.calories}
            onChange={(e) => setFieldValue("calories", e.target.value)}
          />
        </label>
        <ErrorMessage name="calories" component="div" className={styles.error} />

        <label>
          Category
          <select
            value={values.category}
            onChange={(e) => setFieldValue("category", e.target.value)}
          >
            <option value="">Choose category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </label>
        <ErrorMessage name="category" component="div" className={styles.error} />
      </div>
    </section>
  );
};

export default GeneralInfoForm;
