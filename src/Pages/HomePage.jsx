import "../css/homepage.scss";

const HomePage = () => {
  return (
    <>
      <div className="Hompage">
        <div className="bgDiv"></div>
        <img className="Homepage-1-child" alt="" src="alex.jpg" />
        <img className="Homepage-2-child" alt="" src="monica.jpg" />
        <img className="Homepage-3-child" alt="" src="darshan.jpg" />
        <img className="Homepage-4-child" alt="" src="chris.jpg" />
        {/* <div className="Homepage-1-item" /> */}

        <input
          className="search-course"
          placeholder="Search for courses"
        ></input>
        <div className="circle-1-child"></div>
        <div className="circle-2-child"></div>
        <div className="circle-3-child"></div>
        <div className="circle-4-child"></div>
      </div>
      <div className="Home-content">
        <h3 id="text1">Welcome To</h3>
        <h3 id="heading">ASG Academy</h3>
        <h1 id="text2">Learn With The Best School.</h1>
        <p>The world-leading platform with successful lessons.</p>
      </div>
      <div className="faculty">
        <img className="faculty-1-icon" alt="" src="icon8-account-50.pn" />
        <h3 id="title">Our Professional Teachers</h3>
        <div className="facultyDetails">
          <div className="coursecard">
            <div className="image">
              <img src="alex.jpg" alt="" />
            </div>
            <div className="courseDetails">
              <h3>Teacher</h3>
              <p className="courseDescription">ASG academy</p>
              <p className="courseDuration">Duration:</p>
            </div>
          </div>

          <div className="coursecard">
            <div className="image">
              <img src="alex.jpg" alt="" />
            </div>
            <div className="courseDetails">
              <h3>Teacher</h3>
              <p className="courseDescription">ASG academy</p>
              <p className="courseDuration">Duration:</p>
            </div>
          </div>

          <div className="coursecard">
            <div className="image">
              <img src="alex.jpg" alt="" />
            </div>
            <div className="courseDetails">
              <h3>Teacher</h3>
              <p className="courseDescription">ASG academy</p>
              <p className="courseDuration">Duration:</p>
            </div>
          </div>

          <div className="coursecard">
            <div className="image">
              <img src="alex.jpg" alt="" />
            </div>
            <div className="courseDetails">
              <h3>Teacher</h3>
              <p className="courseDescription">ASG academy</p>
              <p className="courseDuration">Duration:</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Experience">
        {/* <div className="bg-dark"></div> */}

        <div className="experience-content">
          <h3 id="text3">Welcome To ASG Academay</h3>
          <p>
            The ASG ACADEMY is into Skill Development Student Programs for
            school Children. We provide the most appropriate and unique set of
            programs and courses designed by our team of experts for overall
            creative, academic, personality and intellectual growth in your
            child at the right stage and age of learning.
          </p>
          <button className="about-us1">About Us</button>
        </div>

        <div className="exp-img">
          <div className="exp1">
            <div className="exp2">
              <img className="exp3" src="alex.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="Services">
        <div className="service-content">
          <h3 id="text4">What We Provide To You</h3>
          <p>
            By enrolling your child in ASG Academy programs,<br></br>
            you can rest assured that they will receive the <br></br>
            guidance and support needed to thrive academically,<br></br>
            creatively, and personally. Our commitment to <br></br>
            excellence ensures that each child receives a tailored <br></br>
            learning experience that equips them with the skills,<br></br>
            knowledge, and confidence to succeed
            <br></br> in an ever-changing world.
          </p>
          <button className="about-us2">About Us</button>
        </div>
      </div>
      <div className="child1-service">
        <h1 className="abacus">Skilled Lecturers</h1>
        <p className="textab">
          Lectures can present large amounts of information,large audiences.
          Lecturers can model how professionals work through disciplinary
          questions or problems.
        </p>
      </div>
      <div className="child2-service">
        <h1 className="vedic">Online Classes</h1>
        <p className="textvedic">
          Online courses teach students how to manage their time better since
          the student bears the responsibility of engaging with the course
          instead of simply showing up to class on an assigned day and time.
        </p>
      </div>
      <div className="child3-service">
        <h1 className="Phonics">24/7 Support</h1>
        <p className="textphonics">
          Fast and responsive customer support can prevent minor issues from
          escalating into major concerns
        </p>
      </div>
      <div className="child4-service">
        <h1 className="Hands-on training">Hands on Training</h1>
        <p className="handson">
          Hands-on learning increases student engagement and knowledge
          retention. It fosters the development of problem-solving and critical
          thinking skills. It allows for the physical creation of tangible
          outcomes.
        </p>
      </div>
      <div className="footer">
        <h1 className="footer-title">
          Let's find best<br></br> course for you
        </h1>
        <h2 className="footerNav1">Home</h2>
        <h2 className="footerNav2">AboutUs</h2>
        <h2 className="footerNav3">Courses</h2>
        <h2 className="footerNav4">Gallery</h2>
        <button className="footercontact">Contact Us</button>
      </div>
    </>
  );
};

export default HomePage;
