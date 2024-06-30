import { useNavigate } from "react-router-dom";
import "../css/Components.scss"
const AboutUsBtn = () => {
  const navigate = useNavigate();
  return <button className="aboutUsBtn" onClick={() => navigate("/about")}>About Us</button>;
};

export default AboutUsBtn;
