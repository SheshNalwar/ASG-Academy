import "../css/App.scss";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <div className="navbar">
        <ul>
          <div className="logo">
            <p>ASG Academy</p>
          </div>
          <div className="navlinks">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/achievements">Achievements</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/about">About Us</NavLink>
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
