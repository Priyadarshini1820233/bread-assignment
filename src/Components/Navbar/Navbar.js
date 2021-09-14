import React, { useState } from "react";
import { Button } from "../../Button";
import { MenuItems } from "./MenuItem";
import "./Navbar.css";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const menuIconHandler = () => {
    setIsClicked((isClicked) => !isClicked);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">bre.ad/jane</h1>
      <div className="menu-icon" onClick={menuIconHandler}>
        <i className={isClicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={isClicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Button>Book Trial</Button>
    </nav>
  );
};

export default Navbar;
