import { NavLink } from "react-router-dom";
import "../css/Components.scss";
const CoursesCard = ({ imagesrc, title, description, duration }) => {
  return (
    <div className="coursecard">
      <div className="image">
        <img src={imagesrc} alt="" />
      </div>
      <div className="courseDetails">
        <h3>{title}</h3>
        <p className="courseDescription">{description}</p>
        <p className="courseDuration">Duration: {duration}</p>
        <div className="readMore">
          <NavLink to="">
            <span className="arrow">Read More -&gt;</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
