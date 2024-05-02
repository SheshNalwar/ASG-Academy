import "../css/Components.scss";
const CourseSection = ({ course }) => {
  return (
    <section id={course.id} className="courseSection">
      <h2>{course.title} Course</h2>
      <p>{course.description}</p>
      <div className="sectionDetails">
        <div className="detail">
          <h3>Benefits</h3>
          <ul>
            {course.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="detail">
          <h3>Duration</h3>
          <p>{course.duration}</p>
        </div>
        <div className="detail">
          <h3>Schedule</h3>
          <p>{course.schedule}</p>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
