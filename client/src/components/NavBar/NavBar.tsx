import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import logo_art from "../../assets/images/logo_art.png";
import Button from "../Button/Button";
import MenuBurger from "../Menu/MenuBurger";
import "./NavBar.css";

function NavBar() {
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
        <li className="my_about">
          <Link to="/artworkPage">ArtworkPage</Link>
        </li>
      </ul>
      <ul className="navbar-links-connection">
        <li className="login">
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
    </nav>
  );
}

export default NavBar;
