import Icon from "../Icon/Icon.jsx";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={css.logo}>
      <div className={css.iconBox}>  {/*для анімашки */}
  
        <div className={css.steam}> </div>   {/* анімашка */}
        <Icon name="logo" classname={css.logoIcon} />
      </div>
      <span className={css.logoText}>Tasteorama</span>
    </div>
  );
}
