import { CourseStats } from "../../Index";
import "../../css/Components.scss";
import icons from "/Icons.svg";

function CourseSection({ courseData }) {
  return (
    <section className="courseSection" id={courseData.targetId}>
      <div className="layout-container">
        <div className="content-wrapper">
          <div className="content-container">
            <div className="image-container">
              <img
                src={courseData.imgsrc}
                alt={courseData.title}
                className="image"
              />
              <div className="courseTitle">
                <p>{courseData.title}</p>
              </div>
            </div>
            <div className="intro-container"></div>
            <div className="stats-container">
              <CourseStats
                courseData={courseData.duration}
                statsTitle="Duration"
              />
              <CourseStats
                courseData={courseData.ageGroup}
                statsTitle="Age Group"
              />
              <CourseStats courseData={courseData.levels} statsTitle="Levels" />
            </div>
            <h2 className="section-title">Benefits Of {courseData.title}:</h2>
            <div className="features-container">
              {courseData.benefits.map((benefit, index) => (
                <div className="feature-item" key={index}>
                  <div className="feature-icon">
                    <svg className="icon">
                      <use xlinkHref={`${icons}#${benefit.icon}`}></use>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h2 className="feature-title">{benefit.benefit}</h2>
                    <p className="feature-description">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseSection;
