import { CourseSection, CoursesCard, LearningModel, Footer } from "../Index.js";
import courses from "../utils/Data.js";
import "../css/CoursePage.scss";
const CoursesPage = () => {
  return (
    <>
      <div className="coursePage">
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
          {courses.map((course) => (
            <CourseSection
              key={course.id}
              course={course}
              imagesrc={course.imgsrc}
              targetId={course.targetId}
              title={course.title}
              duration={course.duration}
              benefits={course.benefits}
              description={course.description}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CoursesPage;
