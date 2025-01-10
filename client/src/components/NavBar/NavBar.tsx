import { CircleUserRound } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo_art from "../../assets/images/logo_art.png";
import Button from "../Button/Button";
import "./NavBar.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <img className="logo" src={logo_art} alt="La tête d'un objet d'art" />
      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </li>
        <li className="my_about">
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            A propos
          </Link>
        </li>
      </ul>
      <ul className="navbar-links-connection">
        <li className="login">
          <Link to="/login" onClick={() => setIsMenuOpen(false)}>
            <CircleUserRound size={28} />
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" onClick={() => setIsMenuOpen(false)}>
            <Button name="Register" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
