import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./MenuBurger.css";

function MenuBurger() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleStateChange = (state: { isOpen: boolean }) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <Menu right width={"50%"} isOpen={isOpen} onStateChange={handleStateChange}>
      <Link to="/" className="menu-item" onClick={closeMenu}>
        Home
      </Link>
      <Link to="/about" className="menu-item" onClick={closeMenu}>
        About
      </Link>
      <Link to="/contact" className="menu-item" onClick={closeMenu}>
        Contact
      </Link>
      <Link to="/artworkPage" className="menu-item" onClick={closeMenu}>
        ArtworkPage
      </Link>
    </Menu>
  );
}

export default MenuBurger;
