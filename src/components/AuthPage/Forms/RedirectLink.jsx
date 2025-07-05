import { NavLink } from "react-router-dom";
import css from "./StylesForm.module.css";

export default function RedirectLink({ text, linkText, to }) {
  return (
    <p className={css.footer}>
      {text}{" "}
      <NavLink to={to} className={css.linkPrimary}>
        {linkText}
      </NavLink>
    </p>
  );
}
