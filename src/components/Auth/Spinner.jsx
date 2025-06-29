import css from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className={css.loader} role="status" aria-label="Loading..."></div>
  );
}
