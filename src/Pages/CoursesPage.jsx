import CoursesCard from "../components/CoursesCard";
import SampleCard from "../components/SampleCard";
import "../css/App.scss";
const CoursesPage = () => {
  return (
    <div className="coursePage">
      {/* <CoursesCard imagesrc="abacus.jpeg" title="Abacus"/> */}
      <CoursesCard imagesrc="phonics.jpeg" title="Abacus"/>
      <CoursesCard imagesrc="handwriting.jpeg" title="Abacus"/>
      <CoursesCard imagesrc="maths.jpeg" title="Vedic Maths"/>
      {/* <SampleCard
        title="Abacus"
        description="Unlock the ancient art of mental arithmetic with our Abacus Techniques Mastery course."
        imageUrl="abacus.jpeg"
        duration="6 weeks"
        enrollmentLink="enroll/abacus"
      /> */}
    </div>
  );
};

export default CoursesPage;
