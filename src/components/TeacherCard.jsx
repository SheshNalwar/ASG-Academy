const TeacherCard = ({ imgsrc, name, subject }) => {
  return (
    <div className="card ">
      <img src={imgsrc} alt="teacherPic" />
      <h3>{name}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, repellat
        optio? Similique
      </p>
      <p className="teachers-subject">Subject: {subject} </p>
    </div>
  );
};

export default TeacherCard;
