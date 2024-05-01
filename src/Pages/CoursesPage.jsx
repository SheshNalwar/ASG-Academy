import CoursesCard from "../components/CoursesCard";
import "../css/App.scss";
const CoursesPage = () => {
  const courses = [
    {
      id: "1",
      imgsrc: "abacus.jpeg",
      title: "Abacus ",
      description:
        "Unlock the ancient art of mental arithmetic with our Abacus Techniques Mastery course.",
      duration: "2 to 3 Months",
    },
    {
      id: "2",
      imgsrc: "handwriting.jpeg",
      title: "Handwriting Improvement",
      description:
        "Enhance your handwriting skills and develop beautiful penmanship with our Handwriting Improvement course.",
      duration: "25 Classes",
    },
    {
      id: "3",
      imgsrc: "maths.jpeg",
      title: "Vedic Maths Fundamentals",
      description:
        "Improve your mathematical skills with our Vedic Maths Fundamentals course.",
      duration: "10 weeks",
    },
    {
      id: "4",
      imgsrc: "phonics.jpeg",
      title: "Phonics for Beginners",
      description:
        "Lay a strong foundation for reading and literacy with our Phonics for Beginners course.",
      duration: "12 weeks",
    },
  ];

  return (
    <div className="coursePage">
      {courses.map((course) => (
        <CoursesCard
          key={course.id}
          imagesrc={course.imgsrc}
          title={course.title}
          duration={course.duration}
          description={course.description}
        />
      ))}
    </div>
  );
};

export default CoursesPage;
