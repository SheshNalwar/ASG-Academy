import CoursesCard from "../components/CoursesCard";
import "../css/App.scss";
const CoursesPage = () => {
  return (
    <div className="coursePage">
      <CoursesCard imagesrc="abacus.jpg"/>
      <CoursesCard/>
      <CoursesCard/>
    </div>
  );
};

export default CoursesPage;
