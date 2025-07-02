import { Field, ErrorMessage } from "formik";
import clsx from "clsx";
import Icon from "../../shared/Icon/Icon.jsx";
import css from "./StylesForm.module.css";

export default function BaseInput({
  label,
  name,
  placeholder,
  type = "text",
  showToggle = false,
  show,
  onToggle,
}) {
  return (
    <label className={css.label} htmlFor={name}>
      {label}
      <div className={css.inputWrapper}>
        <Field name={name}>
          {({ field, meta }) => {
            const hasError = meta.touched && meta.error;
            return (
              <>
                <input
                  {...field}
                  id={name}
                  type={showToggle ? (show ? "text" : "password") : type}
                  placeholder={placeholder}
                  className={clsx(css.input, {
                    [css.inputError]: hasError,
                  })}
                  autoComplete="off"
                  aria-invalid={hasError ? "true" : undefined}
                />
                {showToggle && (
                  <button
                    type="button"
                    className={css.eyeButton}
                    onClick={onToggle}
                    aria-label={show ? "Hide password" : "Show password"}
                  >
                    <Icon
                      name={show ? "eye-open" : "eye-crossed"}
                      className={css.eyeIcon}
                      width="100%"
                      height="100%"
                    />
                  </button>
                )}
              </>
            );
          }}
        </Field>
      </div>
      <ErrorMessage name={name} component="div" className={css.error} />
    </label>
  );
}
