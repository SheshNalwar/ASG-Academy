import { CourseSection, CoursesCard, LearningModel, Footer } from "../Index.js";
import { courses, coursesData } from "../utils/Data.js";
import "../css/CoursePage.scss";
const CoursesPage = () => {
  return (
    <>
      <div className="coursePage">
        <div className="mainCourse">
          <div className="coursePageTitle">
            <p className="coursePageMainTitle">Courses </p>
            <p className="coursePageSubtitle">
              Elevate Your Learning Journey with ASG Academy
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
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default CoursesPage;
