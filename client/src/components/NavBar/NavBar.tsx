import { useState } from "react";
import { Link } from "react-router-dom";
import logo_art from "../../assets/images/logo_art.png";
import menu from "../../assets/images/menu.png";
import "./NavBar.css";
import use_icon from "../../assets/images/user_icon.jpg";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <img className="logo" src={logo_art} alt="La tête d'un objet d'art" />
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
        <li className="my_about">
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            A propos
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/login" onClick={() => setIsMenuOpen(false)}>
            <img className="my_user" src={use_icon} alt="user icon" /> Login
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
  );
}

export default NavBar;
