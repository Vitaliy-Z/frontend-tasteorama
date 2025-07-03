import Icon from "../shared/Icon/Icon";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={css.logo}>
      <div className={css.iconBox}>
        <Icon name="logo" classname={css.logoIcon} />
      </div>
      <span className={css.logoText}>Tasteorama</span>
    </div>
  );
}
