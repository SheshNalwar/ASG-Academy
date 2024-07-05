const CoursesCard = ({
  imagesrc,
  title,
  duration,
  targetId,
  ageGroup,
}) => {
  const scrollToCourse = () => {
    const gap = 60;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - gap;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };
  return (
    <div className="coursecard">
      <div className="image">
        <img src={imagesrc} alt="" />
      </div>
      <div className="courseDetails">
        <h3>{title}</h3>
        <p className="ageGroup">Age Group : {ageGroup}</p>
        <div className="duration">
          <img src="duration.png" alt="" />
          <p className="courseDuration">{duration}</p>
        </div>
        <div className="viewMoreDiv">
          <button className="viewMoreBtn" onClick={scrollToCourse}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
