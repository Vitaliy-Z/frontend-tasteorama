import { ErrorMessage } from "formik";
import styles from "./InstructionsForm.module.css";

const InstructionsForm = ({ value, onChange }) => (
  <div className={styles.instrContainer}>
    <h3>Instructions</h3>
    <textarea
      className={styles.instrtext}
      placeholder="Enter instructions"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    <ErrorMessage name="instructions" component="p" style={{ color: "red" }} />
  </div>
);

export default InstructionsForm;
