import { CourseSection, CoursesCard, Footer } from "../Index.js";
import courses from "../utils/Data.js";
import "../css/CoursePage.scss";
const CoursesPage = () => {
  return (
    <>
      <div className="coursePage">
        <div className="cardSection">
          <p className="subtitle">Our Courses</p>
          <div className="cards">
            {courses.map((course) => (
              <CoursesCard
                key={course.id}
                imagesrc={course.imgsrc}
                title={course.title}
                duration={course.duration}
                levels={course.levels}
                targetId={course.targetId}
                ageGroup={course.ageGroup}
              />
            ))}
          </div>
        </div>
        <div className="allCourseSection">
          <p className="ourCourse">Our Course Section : </p>
          {courses.map((course) => {
            return <CourseSection courseData={course} key={course.id} />;
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CoursesPage;
