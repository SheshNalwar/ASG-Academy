import "../css/Components.scss";
const CoursesCard = ({ imagesrc, title, description, duration, targetId }) => {
  const scrollToCourse = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="coursecard">
      <div className="image">
        <img src={imagesrc} alt="" />
      </div>
      <div className="courseDetails">
        <h3>{title}</h3>
        <p className="courseDescription">{description}</p>
        <p className="courseDuration">Duration: {duration}</p>
        <div className="viewMore" onClick={scrollToCourse}>
          <span className="arrow">View More -&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
