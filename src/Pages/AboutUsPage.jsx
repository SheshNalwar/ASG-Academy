import "../css/AboutUs.scss"
const AboutUsPage = () => {
  return (
    <div className="aboutUsPage">
      <div className="aboutTitle">
        <h1>About Us</h1>
      </div>

      <div className="about-academy">
        <div className="academy-content">
          <h2 className="academy-title">ASG Academy</h2>
          <div className="academy-text">The ASG ACADEMY is into Skill Development Student Programs for school Children. We provide the most appropriate and unique set of programs and courses designed by our team of experts for overall creative, academic, personality and intellectual growth in your child at the right stage and age of learning. Each program that you are going to see in this site is exceptional and is of unmatched quality. We have a wide array of programs namely Abacus, Vedic Maths, Phonetics, Spoken English, English Grammar, Handwriting, Finger Abacus, etc. These are not just some courses, they are life changing experiences for children.</div>
        </div>
        <img src="Academy.jpeg" alt="" />
      </div>

      <div className="director-msg">
        <img src="Director.jpg" alt="" />
        <div className="msg">
          <h2 className="msg-title">Message From Founder And Director</h2>
          <div className="msg-text">
            The ASG Academy is a premier institution that specializes in helping kids develop their intellectual and cognitive skills through our comprehensive techniques taught through Vedic Maths, Abacus, memory skills, phonics, Grammar, Finger Abacus and handwriting classes. We forayed into the arena of learning in 2019 with just 10 students in our first batch and have gained significant experience in 05 years that has made us a pioneer of education. Our unique approach has helped us set novel standards of excellence in mental arithmetic and abacus education in the country. ASG ACADEMY strongly believes in following result-oriented and innovative approaches of teaching, which has made us the number one choice of parents, schools, teachers, educationalists, franchisees, and subject experts.
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="services">
          <p className="services-p">Services</p>
          <h2 className="services-contact">
            Contact Us
          </h2>
          <p className="services-address">ASG Academy, Plot no 221/222, Flat no-11, Shiva ganga Nagar, Near Santoshi mata Temple, Jule Solapur Solapur 413004
            Mobile- 8830943211 ,9130646448</p>
        </div>
        <div className="policy">
          <h2 className="policy-title">Cancellation & Refund Policy</h2>
          <p className="policy-text">As Of Now We Do Not Provide Any Option For Cancellation Of Products And/Or Services You Have Purchased Or Subscribed. Once A Product/Service Has Been Purchased By You, We Cannot Provide Any Refund, Either Totally Or Partially. We Suggest That First You Go Through The Demos Before You Subscribe To Or Purchase From ASG ACADEMY And As A Customer You Are Responsible For Understanding That No Refund Or Cancellation Is Possible Upon Any Subscription At Our Site</p>
        </div>
      </div>

    </div>
  );
};

export default AboutUsPage;
