<<<<<<< HEAD
import { CourseSection, CoursesCard, LearningModel, Footer } from "../Index.js";
import { courses, coursesData } from "../utils/Data.js";
=======
import { CourseSection, CoursesCard, Footer } from "../Index.js";
import courses from "../utils/Data.js";
>>>>>>> c7f7016871ad4c106b686c0d206e7e2178efadba
import "../css/CoursePage.scss";
const CoursesPage = () => {
  return (
    <>
      <div className="coursePage">
<<<<<<< HEAD
        <div className="mainCourse">
          <div className="coursePageTitle">
            <p className="coursePageMainTitle">Courses </p>
            <p className="coursePageSubtitle">
              Elevate Your Learning Journey with <span>ASG Academy</span>
            </p>
          </div>
          <img src="course.jpeg" alt="" />
        </div>
        <LearningModel />
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
          {coursesData.map((course) => (
            <CourseSection key={course.id} course={course} />
          ))}
=======
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
>>>>>>> c7f7016871ad4c106b686c0d206e7e2178efadba
        </div>
        <Footer />
      </div>
<<<<<<< HEAD
      {/* <Footer /> */}
=======
>>>>>>> c7f7016871ad4c106b686c0d206e7e2178efadba
    </>
  );
};

export default CoursesPage;
