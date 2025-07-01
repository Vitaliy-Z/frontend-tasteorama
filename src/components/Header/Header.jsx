import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../Logo/Logo";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Navigation from "./Navigation/Navigation";

import css from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userName, setUserName] = useState("Tina");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserName("");
    navigate("/");
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Logo />
        <BurgerMenu open={menuOpen} setOpen={setMenuOpen} />

        <div className={css.desktopNav}>
          <Navigation
            isLoggedIn={isLoggedIn}
            closeMenu={() => {}}
            userName={userName}
            onLogout={handleLogout}
            isMobile={false}
          />
        </div>
      </div>

      {menuOpen && (
        <div className={`${css.mobileMenu} ${css.open}`}>
          <Navigation
            isLoggedIn={isLoggedIn}
            closeMenu={() => setMenuOpen(false)}
            userName={userName}
            onLogout={handleLogout}
            isMobile={true}
          />
        </div>
      )}
    </header>
  );
}
