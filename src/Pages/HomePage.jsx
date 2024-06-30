import { AboutUsBtn, Footer, ServicesCard, TeacherCard } from "../Index.js";
import "../css/homepage.scss";

function HomePage() {
  return (
    <>
      <div className="homepage">
        <div className="landingPage">

          <img className="elements element1" src="element1.png" alt="" />
          <img className="elements element2" src="element 2.png" alt="" />
          <div className="heading">
            <p>L e a r n i n g</p>
          </div>

          <div className="landing-images">
            <img className="boy" src="Boy.png" alt="Boy" />

          </div>

          <div className="landing-description">
            <p>NURTURING <span>MINDS</span>, PROSPERING FUTURE</p>
            <AboutUsBtn />
          </div>
        </div>

        <div className="teachers">
          <div className="teachers-title">
            <img alt="" src="teacher-icon.png" />
            <h1>Our Professional Teachers</h1>
            <p>We provide the best service that comes with the best results.</p>
          </div>
          <div className="teachers-card">
            <TeacherCard name="ABC" imgsrc="chris.jpg" subject="Physics" />
            <TeacherCard name="ABC" imgsrc="chris.jpg" subject="Chemistry" />
            <TeacherCard name="ABC" imgsrc="chris.jpg" subject="Maths" />
            <TeacherCard name="ABC" imgsrc="chris.jpg" subject="Biology" />
          </div>
        </div>

        <div className="experience">
          <div className="experience-images">
            <div className="black"></div>
            <div className="blue"></div>
            <img src="phonics.jpeg" alt="" />
            <div className="grey">
              <div className="white">
                <h1>12</h1>
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>
          <div className="experience-content">
            <h1>
              Welcome To <span>ASG Academy</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              rerum molestiae fugiat reprehenderit amet est pariatur, excepturi
              rem, necessitatibus doloremque magnam at ipsa nesciunt
              consequuntur error? Aliquam harum a totam!
            </p>
            {/* <AboutUsBtn /> */}
          </div>
        </div>

        <div className="services">
          <div className="services-content">
            <p className="services-title">Our Services</p>
            <h1>What We Provide To You</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              facere cumque nisi, laboriosam, accusantium tenetur reiciendis
              incidunt ipsam animi iure optio in fuga est tempora ab, sint
              mollitia aliquam doloremque?
            </p>
            {/* <button>View More</button> */}
          </div>
          <div className="services-cards">
            <ServicesCard cardClass="card1" name="Skilled Lectures" count={1} />
            <ServicesCard cardClass="card2" name="Mentorship" count={2} />
            <ServicesCard cardClass="card3" name="Online Classes" count={3} />
            <ServicesCard cardClass="card4" name="24/7 Support" count={4} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
