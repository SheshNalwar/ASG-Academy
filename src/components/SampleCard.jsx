import React from "react";
import "./SampleCard.css";

const SampleCard = ({
  title,
  description,
  imageUrl,
  duration,
  enrollmentLink,
}) => {
  return (
    <div className="course-card">
      <img src={imageUrl} alt={title} className="course-image" />
      <div className="course-details">
        <h2 className="course-title">{title}</h2>
        <p className="course-description">{description}</p>
        <p className="course-duration">Duration: {duration}</p>
        <a href={enrollmentLink} className="enroll-button">
          Enroll Now
        </a>
      </div>
    </div>
  );
};

export default SampleCard;
