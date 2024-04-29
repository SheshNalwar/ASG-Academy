import "../css/Components.scss";
const CoursesCard = ({ imagesrc, title }) => {
  return (
    <div className="coursecard">
      <div className="image">
        <img src={imagesrc} alt="" />
      </div>
      <div className="courseDetails">
        <h2 className="course-title">{title}</h2>
      </div>
    </div>
  );
};

export default CoursesCard;
