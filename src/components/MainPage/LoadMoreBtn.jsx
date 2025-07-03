import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick, isVisible = true }) {
  if (!isVisible) return null;

  return (
    <button type="button" className={css.button} onClick={onClick}>
      Load more
    </button>
  );
}