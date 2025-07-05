import { Field, ErrorMessage } from "formik";
import css from "./StylesForm.module.css";

export default function CheckboxInput({ name, label }) {
  return (
    <div className={css.checkboxWrapper}>
      <label className={css.checkboxLabel}>
        <Field type="checkbox" name={name} className={css.checkboxInput} />
        <span className={css.checkboxText}>
          {label || "I agree to the Terms of Service and Privacy Policy"}
        </span>
      </label>
      <ErrorMessage name={name} component="div" className={css.error} />
    </div>
  );
}
