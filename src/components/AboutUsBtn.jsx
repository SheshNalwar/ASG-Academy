import { useNavigate } from "react-router-dom";
const AboutUsBtn = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/about")}>About Us</button>;
};

export default AboutUsBtn;
