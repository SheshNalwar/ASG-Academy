import { NavLinks, ContactUsBtn } from "../Index";
import { useState } from "react";
import "../css/Components.scss";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  function toggleMenu() {
    setOpen(!open);
  }
  return (
    <nav>
      <div className="navbar">
        <ul>
          <div className="logo">
            <img src="Logocopy.png" alt="Logo"/>
            <p>ASG Academy</p>
          </div>
          <div className="navlinks">
            <NavLinks />
            <ContactUsBtn btnId="contactUsBtn" />
          </div>
          <div
            className={`hamburgerMenu ${open ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <div className="lines" id="line1"></div>
            <div className="lines" id="line2"></div>
            <div className="lines" id="line3"></div>
          </div>
        </ul>
      </div>
      <div className={`menuPage ${open ? "open" : ""}`}>
        <ul>
          <NavLinks />
          <ContactUsBtn btnId="menuContactBtn" />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
