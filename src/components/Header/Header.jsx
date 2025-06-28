// const Header = () => {
//   return <header>Header</header>;
// };

// export default Header;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Header.module.css";

// Поки без useSelector
const isLoggedIn = false; // false  true
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const userName = "Tinadin"; // заглушка для юзера

  return (
    <header className={css.header}>
      <div className={css.logo}>Tasteorama</div>

      {/* Бургер-кнопка */}
      <button
        className={css.burger}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {/* Можна замінити на SVG або іконку */}☰
      </button>
      {/* Навігація — додаємо клас active, якщо меню відкрите */}
      <nav className={css.nav}>
        <NavLink
          to="/"
          className={buildLinkClass}
          onClick={() => setMenuOpen(false)}
        >
          Recipes
        </NavLink>

        {!isLoggedIn ? (
          <>
            <NavLink
              to="/auth/login"
              className={buildLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Log in
            </NavLink>
            <NavLink
              to="/auth/register"
              className={buildLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Register
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/profile"
              className={buildLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              My Profile
            </NavLink>
            <NavLink
              to="/add"
              className={buildLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Add Recipe
            </NavLink>

            <div className={css.userBox}>
              <div className={css.avatar}>{userName[0]}</div>
              <span>{userName}</span>
              <button className={css.logoutBtn}>Вийти</button>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
