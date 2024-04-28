import "../css/Components.scss";
const CoursesCard = ({ imagesrc }) => {
  return (
    <div className="coursecard">
      <div className="image">
        <img src={imagesrc} alt="" />
      </div>
    </div>
  );
};

export default CoursesCard;
