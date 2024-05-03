import "../css/homepage.scss" 

const HomePage = () => {
  
  return (
    <> 
    <div className="Hompage">
      <div className="bgDiv"></div>
      <img className="Homepage-1-child" alt="" src="alex.jpg" />
      <img className="Homepage-2-child" alt="" src="monica.jpg" />
      <img className="Homepage-3-child" alt="" src="darshan.jpg" />
      <img className="Homepage-4-child" alt="" src="chris.jpg" />
      <div className="Homepage-1-item" />
      {/* <input className="search-course"></input> */}
      <img className="search-icon" alt="" src="icons8-search-56.jpg" />
      <div className="circle-1-child" ></div>
      <div className="circle-2-child" ></div>
      <div className="circle-3-child" ></div>
      <div className="circle-4-child" ></div>
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
<div className="Experience" >
<div className="experience-content">
          <h3 id="text2">Welcome To ASG Academay</h3>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Faucibus sit nunc mauris arcu blandit. 
            Turpis vitae lectus a ut.Lorem ipsum dolor
             sit amet,consectetur adipiscing elit..</p> 
             <button className="about-us"></button>
             <div className="circle-experience-child" ></div>
    </div>
     <div className="bgDiv2"></div>
      <div className="Experience-child" />
      <div className="Experience-child2"/>
      <div className="Experience-child3">
      <img src="alex.jpg" alt="" />
      </div>
</div>
<div className="Services">
      </div>
      <div className="child1-service"></div>
      <div className="child2-service"></div>
      <div className="child3-service"></div>
      <div className="child4-service"></div>
    </>
  );
};

export default HomePage;



