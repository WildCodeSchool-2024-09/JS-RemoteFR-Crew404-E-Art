import { slide as Menu } from "react-burger-menu";
import "./MenuBurger.css";

function MenuBurger() {
  return (
    <Menu right>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
}

export default MenuBurger;
