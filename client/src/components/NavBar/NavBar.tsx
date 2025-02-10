import { CircleUserRound, LockIcon, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import logo_art from "../../assets/images/logo_art.png";
import Button from "../Button/Button";
import MenuBurger from "../Menu/MenuBurger";
import "./NavBar.css";

import { useAuth } from "../../context/AuthContext";

function NavBar() {
  const { user, handleLogout } = useAuth();

  return (
    <nav className="navbar">
      <img className="logo" src={logo_art} alt="La tête d'un objet d'art" />
      <MenuBurger />
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li className="my_about">
          <Link to="/about">A propos</Link>
        </li>
      </ul>

      {user ? (
        <ul className="navbar-links-connection">
          <li className="logout-button">
            <Link to="/profil">Hello {user.name}</Link>
            <button type="button" onClick={handleLogout}>
              <LogOut size={28} />
            </button>
          </li>
        </ul>
      ) : (
        <ul className="navbar-links-connection">
          <li>
            <Link to="/login">
              <CircleUserRound size={28} />
              Login
            </Link>
          </li>
          <li>
            <Link to="/register">
              <Button name="Register" />
            </Link>
          </li>
        </ul>
      )}
      {user && user.role_id === 1 && (
        <ul className="navbar-links-connection">
          <li className="admin-link">
            <LockIcon size={28} />
            <Link to="/admin/dashboard">Admin</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
