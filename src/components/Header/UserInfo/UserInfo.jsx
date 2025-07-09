import { useState } from "react";
import css from "./UserInfo.module.css";
import Icon from "../../shared/Icon/Icon";
import ConfirmLogoutModal from "../ConfirmLogoutModal/ConfirmLogoutModal";

export default function UserInfo({ userName = "User", onLogout, className }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={`${css.wrapper} ${className}`}>
      <div className={css.avatar}>{userName?.[0]?.toUpperCase() || "?"}</div>
      <span className={css.name}>{userName || "Guest"}</span>
      <div className={css.divider}></div>
      <button
        className={css.logoutBtn}
        onClick={() => setShowModal(true)}
        aria-label="Logout"
      >
        <Icon name="logout" classname={css.logoutIcon} />
      </button>

      {showModal && (
        <ConfirmLogoutModal
          onClose={() => setShowModal(false)}
          onConfirm={onLogout}
        />
      )}
    </div>
  );
}
