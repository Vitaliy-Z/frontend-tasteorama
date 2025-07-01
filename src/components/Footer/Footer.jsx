import { NavLink, useLocation } from "react-router-dom";
import css from "./Footer.module.css";
import Logo from "../Logo/Logo.jsx";
// import { useSelector } from "react-redux";

const Footer = () => {
  const location = useLocation();
  const hideAccountLink = location.pathname.startsWith("/auth");

  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <Logo />

        <p className={css.copyright}>
          © 2025 CookingCompanion. All rights reserved.
        </p>

        <div className={css.nav}>
          <NavLink to="/" className={css.link}>
            Recipes
          </NavLink>

          {!hideAccountLink && (
            <NavLink to="/profile" className={css.link}>
              Account
            </NavLink>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
