import { useState } from "react";
import { NavLink } from "react-router-dom";
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
            <img src="Logocopy.png" />
            <p>ASG Academy</p>
          </div>
          <div className="navlinks">
            <NavLink to="/" activeclassname="active">
              Home
            </NavLink>
            <NavLink to="/about" activeclassname="active">
              About Us
            </NavLink>
            <NavLink to="/courses" activeclassname="active">
              Courses
            </NavLink>
            <NavLink to="/gallery" activeclassname="active">
              Gallery
            </NavLink>
            <NavLink to="/achievements" activeclassname="active">
              Achievements
            </NavLink>
            <button
              id="contactUsBtn"
              onClick={() => {
                window.open("https://forms.gle/6ZLDGXRLou66p9QBA");
              }}
            >
              Contact Us
            </button>
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
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/about" activeclassname="active">
            About Us
          </NavLink>
          <NavLink to="/courses" activeclassname="active">
            Courses
          </NavLink>
          <NavLink to="/gallery" activeclassname="active">
            Gallery
          </NavLink>
          <NavLink to="/achievements" activeclassname="active">
            Achievements
          </NavLink>
          <button
            onClick={() => {
              window.open("https://forms.gle/6ZLDGXRLou66p9QBA");
            }}
          >
            Contact Us
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
