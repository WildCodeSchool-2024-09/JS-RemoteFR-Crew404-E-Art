import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo_art from "../assets/images/logo_art.png";
import menu from "../assets/images/menu.png";
import "./NavBar.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {location.pathname === "/" && (
        <img className="logo" src={logo_art} alt="La tête d'un objet d'art" />
      )}
      <nav className="navbar">
        <div className="navbar_header">
          <button
            className="burger-menu"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <img src={menu} alt="Menu burger" className="menu_icon" />
          </button>
        </div>
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
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              A propos
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" onClick={() => setIsMenuOpen(false)}>
              <button className="register_button" type="button">
                REGISTER
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
