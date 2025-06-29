import { Field } from "formik";
import clsx from "clsx";
import sprite from "../../Icon/sprite.svg";
import css from "./RegistrationForm.module.css";

export default function CheckboxInput({ name, children }) {
  return (
    <Field name={name} type="checkbox">
      {({ field, meta }) => {
        const hasError = meta.touched && meta.error;
        return (
          <label className={css.checkboxLabel} htmlFor={name}>
            <input
              {...field}
              type="checkbox"
              id={name}
              className={css.hiddenCheckbox}
              aria-invalid={hasError}
              aria-checked={field.checked}
            />
            <div className={css.iconAndText}>
              <svg
                className={clsx(css.checkboxIcon, {
                  [css.checked]: field.checked,
                })}
                viewBox="0 0 48 32"
                aria-hidden="true"
              >
                <use
                  href={`${sprite}#${
                    field.checked ? "icon-check-alternative" : "icon-Box"
                  }`}
                />
              </svg>
              <span className={css.checkboxText}>{children}</span>
            </div>
            {hasError && (
              <div id={`${name}-error`} className={css.error}>
                {meta.error}
              </div>
            )}
          </label>
        );
      }}
    </Field>
  );
}
