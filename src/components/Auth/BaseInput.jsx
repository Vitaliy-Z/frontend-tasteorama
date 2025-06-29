import { useField } from "formik";
import clsx from "clsx";
import Icon from "../Icon/Icon.jsx";
import css from "./RegistrationForm/RegistrationForm.module.css";

export default function BaseInput({
  label,
  name,
  placeholder,
  type = "text",
  showToggle = false,
  show,
  onToggle,
}) {
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;

  return (
    <label className={css.label} htmlFor={name}>
      {label}
      <div className={css.inputWrapper}>
        <input
          {...field}
          id={name}
          type={showToggle ? (show ? "text" : "password") : type}
          placeholder={placeholder}
          autoComplete="off"
          className={clsx(css.input, hasError && css["input-error"])}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${name}-error` : undefined}
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
              classname={css.eyeIcon}
              size={24}
            />
          </button>
        )}
      </div>
      {hasError && (
        <div id={`${name}-error`} className={css.error}>
          {meta.error}
        </div>
      )}
    </label>
  );
}
