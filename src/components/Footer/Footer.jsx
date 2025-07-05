import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./Footer.module.css";
import Logo from "../Logo/Logo.jsx";

const Footer = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = !!user;
  const location = useLocation();

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

          {!isLoggedIn && !location.pathname.includes("/auth") && (
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
