import "../css/homepage.scss";
import React from 'react'
import { Footer } from '../Index.js'

function HomePage() {
  return (
    <>

      <div className="homepage">
        <div className="landingPage">
          <div className="landing-img">
            <img className="left left-img1" src="alex.jpg" alt="" />
            <img className="left left-img2 " src="chris.jpg" alt="" />
            <img className="right right-img1" src="darshan.jpg" alt="" />
            <img className="right right-img2" src="monica.jpg" alt="" />
          </div>
          <div className="landing-intro">
            <h1>ASG Academy </h1>
            <h3>Learn With The Best School.</h3>
            <p>"Explore limitless learning possibilities at ASG Academy, offering curated content and interactive resources for students and educators alike."</p>

            <button>About Us</button>
          </div>
        </div>

        <div className="teachers">

          <div className="teachers-title">
            <img alt="" src="teacher icon.webp" />
            <h1>Our Professional Teachers</h1>
            <p>We provide the best service that comes with the best results.</p>
          </div>
          <div className="teachers-card">
            <div className="card">

              <img src="alex.jpg" alt="" />
              <h3>Name</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, repellat optio? Similique</p>
              <p className="teachers-subject">Subject: Maths </p>
            </div>
            <div className="card">
              <img src="alex.jpg" alt="" />
              <h3>Name</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, repellat optio? Similique</p>
              <p className="teachers-subject">Subject: Maths </p>
            </div>
            <div className="card">
              <img src="alex.jpg" alt="" />
              <h3>Name</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, repellat optio? Similique</p>
              <p className="teachers-subject">Subject: Maths </p>
            </div>
            <div className="card">
              <img src="alex.jpg" alt="" />
              <h3>Name</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, repellat optio? Similique</p>
              <p className="teachers-subject">Subject: Maths </p>
            </div>
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
                <p>Years
                  Experience
                </p>
              </div>
            </div>
          </div>
          <div className="experience-content">
            <h1>Welcome To <span>ASG Academy</span> </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis rerum molestiae fugiat reprehenderit amet est pariatur, excepturi rem, necessitatibus doloremque magnam at ipsa nesciunt consequuntur error? Aliquam harum a totam!</p>
            <button>About Us</button>
          </div>
        </div>

        <div className="services">
          <div className="services-content">
            <p className="services-title">Our Services</p>
            <h1>What We Provide To You</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facere cumque nisi, laboriosam, accusantium tenetur reiciendis incidunt ipsam animi iure optio in fuga est tempora ab, sint mollitia aliquam doloremque?</p>
            <button>View More</button>
          </div>
          <div className="services-cards">

            <div className="card card1">
              <div className="number">1</div>
              <h3>Skilled Lectures</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolore</p>
            </div>
            <div className="card card2">
              <div className="number">2</div>
              <h3>Mentorship</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolore</p>
            </div>
            <div className="card card3">
              <div className="number">3</div>
              <h3>Online Classes</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolore</p>
            </div>
            <div className="card card4">
              <div className="number">4</div>
              <h3>24/7 Support</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolore</p>
            </div>

          </div>
        </div>

        <Footer />

      </div>
    </>
  )
}

export default HomePage