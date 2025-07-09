import { createPortal } from "react-dom";
import { useEffect } from "react";
import Icon from "../../shared/Icon/Icon";
import css from "./ConfirmLogoutModal.module.css";

export default function ConfirmModal({ onClose, onConfirm }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal}>
        <button className={css.closeBtn} onClick={onClose}>
          <Icon name="close" classname={css.closeIcon} />
        </button>
        <div className={css.content}>
          <h2 className={css.title}>Are you sure?</h2>
          <p className={css.text}>We will miss you!</p>
          <div className={css.actions}>
            <button className={css.cancelBtn} onClick={onClose}>
              Cancel
            </button>
            <button className={css.logoutBtn} onClick={onConfirm}>
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
