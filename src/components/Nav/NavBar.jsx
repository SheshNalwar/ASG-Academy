import { NavLinks, ContactUsBtn } from "../../Index";
import { useState, useEffect, useRef } from "react";
import "../../css/Components.scss";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerMenuRef = useRef(null);

  function toggleMenu() {
    setOpen(!open);
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerMenuRef.current &&
        !hamburgerMenuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <div className="navbar">
        <ul>
          <div className="logo">
            <img src="Logocopy.png" alt="Logo" />
            <p>ASG Academy</p>
          </div>
          <div className="navlinks">
            <NavLinks />
            <ContactUsBtn btnId="contactUsBtn" />
          </div>
          <div
            className={`hamburgerMenu ${open ? "active" : ""}`}
            onClick={toggleMenu}
            ref={hamburgerMenuRef}
          >
            <div className="lines" id="line1"></div>
            <div className="lines" id="line2"></div>
            <div className="lines" id="line3"></div>
          </div>
        </ul>
      </div>
      <div className={`menuPage ${open ? "open" : ""}`} ref={menuRef}>
        <ul>
          <NavLinks />
          <ContactUsBtn btnId="menuContactBtn" />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
