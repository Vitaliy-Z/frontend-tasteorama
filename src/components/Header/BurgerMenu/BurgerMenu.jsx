import Icon from "../../shared/Icon/Icon";
import css from "./BurgerMenu.module.css";

export default function BurgerMenu({ open, setOpen }) {
  return (
    <button
      className={open ? css.closeBtn : css.burgerBtn}
      onClick={() => setOpen(!open)}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <Icon
        name={open ? "close" : "burger"}
        classname={open ? css.closeIcon : css.burgerIcon}
      />
    </button>
  );
}
