import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <button type="button" className={css.button} onClick={onClick}>
      Load more
    </button>
  );
}
