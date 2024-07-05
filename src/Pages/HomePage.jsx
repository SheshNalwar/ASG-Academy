import { AboutUsBtn, Footer, ServicesCard, TeacherCard } from "../Index.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import "../css/homepage.scss";
import gsap from "gsap";
function HomePage() {
  const container = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".heading", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 0.5,
      opacity: 0,
      duration: 1,
    });
    gsap.from(".landing-images .boy", 1.8, {
      // y: 100,
      ease: "power4.out",
      delay: 0.5,
      opacity: 0,
      duration: 1,
    });
    gsap.from(".landing-description button", 1.8, {
      y: 20,
      ease: "power4.out",
      delay: 0.5,
      opacity: 0,
      duration: 1,
    });
    gsap.from(".element1, .element2", 1.8, {
      ease: "power4.out",
      delay: 0.5,
      duration: 1,
      opacity: 0,
      rotation: 90,
    });
    gsap.from(".landing-description p", 1.8, {
      y: 20,
      delay: 0.5,
      duration: 1,
      opacity: 0,
    });
    gsap.from(".experience-content h1", 1.3, {
      y: 50,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".card",
        toggleActions: "play",
        start: "bottom 300vh",
        scroller: "body",
        end: "+=200",
        ease: "power1.inOut",
        scrub: 0.5,
      },
    });
    gsap.from(".experience-images", {
      y: 60,
      opacity: 0,
      duration: 0.3,
      scale: 0.89,
      scrollTrigger: {
        trigger: ".experience-images",
        toggleActions: "play",
        start: "top 500",
        scroller: "body",
        end: "+=200",
        ease: "power1.inOut",
        scrub: 0.5,
      },
    });
    gsap.from(".teachers-card .card, .teachers-title h1", 1.8, {
      y: 20,
      opacity: 0.5,
      duration: 0.3,
      scale: 0.89,
      scrollTrigger: {
        trigger: ".card",
        toggleActions: "play",
        start: "top 700vh",
        scroller: "body",
        end: "+=200",
        ease: "power1.inOut",
        scrub: 0.5,
      },
    });
    gsap.from(".services .services-content h1", 1.3, {
      y: 50,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".services",
        toggleActions: "play",
        start: "top 450vh",
        scroller: "body",
        end: "+=200",
        ease: "power1.inOut",
        scrub: 0.5,
      },
    });
    gsap.from(".services .services-cards .card", 1.3, {
      y: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".services-cards .card",
        toggleActions: "play",
        start: "top 600",
        scroller: "body",
        end: "+=200",
        ease: "power1.inOut",
        scrub: 0.1,
      },
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".logo img",
          scrub: 1,
          start: "top top",
          end: "2200",
        },
      })
      .to(".logo img", {
        rotation: 360*2,
        ease: true,
      });
  }, []);
  return (
    <div className="homepage" ref={container}>
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
          <p>
            NURTURING <span>MINDS</span>, PROSPERING FUTURE
          </p>
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
          <TeacherCard name="ABC" imgsrc="teacher.png" subject="Physics" />
          <TeacherCard name="ABC" imgsrc="teacher.png" subject="Chemistry" />
          <TeacherCard name="ABC" imgsrc="teacher.png" subject="Maths" />
          <TeacherCard name="ABC" imgsrc="teacher.png" subject="Biology" />
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis rerum
            molestiae fugiat reprehenderit amet est pariatur, excepturi rem,
            necessitatibus doloremque magnam at ipsa nesciunt consequuntur
            error? Aliquam harum a totam!
          </p>
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
  );
}

export default HomePage;
