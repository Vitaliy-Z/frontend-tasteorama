import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Logo</Link>
        <div>
          <NavLink to="/auth/login">Login</NavLink>
          <NavLink to="/auth/register">Register</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
