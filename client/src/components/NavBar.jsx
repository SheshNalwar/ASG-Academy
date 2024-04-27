import "../css/App.scss"
const NavBar = () => {
  return (
    <nav>
      <div className="navbar">
        <ul>
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Gallery</a>
          <a href="">Courses</a>
          <div className="hamburger">
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
