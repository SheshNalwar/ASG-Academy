const CourseStats = ({ courseData, statsTitle }) => {
  return (
    <div className="stat-item">
      <div className="stat-subtext">{statsTitle}</div>
      <p className="stat-value">{courseData}</p>
    </div>
  );
};

export default CourseStats;
