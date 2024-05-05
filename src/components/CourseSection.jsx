import "../css/Components.scss";
const CourseSection = ({ course }) => {
  return (
    <section id={course.id} className="courseSection">
      <div className="image">
        <img src={course.imgsrc} alt="" />
      </div>
      <div className="courseDetails">
        <div className="courseTitleDesc">
          <h2>{course.title}</h2>
          <p id="courseDesc">{course.description}</p>
        </div>
        <div className="benefits">
          <h3>Benefits</h3>
          <ol role="list">
            {course.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ol>
        </div>
        <div className="courseDuration">
          <img src="duration-white.png" alt="" />
          <p>{course.duration}</p>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
