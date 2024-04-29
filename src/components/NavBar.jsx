import "../css/Components.scss";
import { NavLink } from "react-router-dom";
const NavBar = () => {
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
            <NavLink to="/gallery" activeclassname="active">
              Gallery
            </NavLink>
            <NavLink to="/achievements" activeclassname="active">
              Achievements
            </NavLink>
            <NavLink to="/courses" activeclassname="active">
              Courses
            </NavLink>
            <NavLink to="/about" activeclassname="active">
              About Us
            </NavLink>
          </div>
          <div className="hamburgerMenu">
            <div className="lines"></div>
            <div className="lines"></div>
            <div className="lines"></div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
