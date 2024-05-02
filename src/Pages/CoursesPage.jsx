import { CourseSection, CoursesCard } from "../Index.js";
import { courses, coursesData } from "../utils/Data.js";
import "../css/App.scss";
const CoursesPage = () => {
  return (
    <div className="coursePage">
      <div className="mainCourse">
        <div className="coursePageTitle">
          <p className="coursePageMainTitle">Course Offerings </p>
          <p className="coursePageSubtitle">
            Elevate Your Learning Journey with ASG Academy
          </p>
        </div>
      </div>
      <div className="cardSection">
        <p className="subtitle">Our Courses </p>
        <div className="cards">
          {courses.map((course) => (
            <CoursesCard
              key={course.id}
              imagesrc={course.imgsrc}
              title={course.title}
              duration={course.duration}
              description={course.description}
              targetId={course.targetId}
            />
          ))}
        </div>
      </div>
      <div className="allCourseSection">
        <p>Our Course Section : </p>
        {coursesData.map((course) => (
          <CourseSection key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
