import "../css/Components.scss";
const CourseSection = ({
  imagesrc,
  title,
  duration,
  benefits,
  description,
  targetId
}) => {
  return (
    <section id={targetId} className="courseSection">
      <div className="image">
        <img src={imagesrc} alt="" />
      </div>
      <div className="courseDetails">
        <div className="courseTitleDesc">
          <h2>{title}</h2>
          <p id="courseDesc">{description}</p>
        </div>
        <div className="benefits">
          <h3>Benefits</h3>
          <ol role="list">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ol>
        </div>
        <div className="courseDuration">
          <img src="duration.png" alt="" />
          <p>{duration}</p>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
