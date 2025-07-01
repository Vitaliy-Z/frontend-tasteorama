import css from "./UserInfo.module.css";
import Icon from "../../shared/Icon/Icon";

export default function UserInfo({ userName = "User", onLogout, className }) {
  return (
    <div className={`${css.wrapper} ${className}`}>
      <div className={css.avatar}>{userName?.[0]?.toUpperCase() || "?"}</div>
      {/* <div className={css.avatar}>{userName[0]}</div> */}
      <span className={css.name}>{userName || "Guest"}</span>
      <div className={css.divider}></div>
      <button className={css.logoutBtn} onClick={onLogout} aria-label="Logout">
        <Icon name="logout" classname={css.logoutIcon} />
      </button>
    </div>
  );
}
