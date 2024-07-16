// Skills.js
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import CircularProgress from './CircularProgress';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">  
            <div className="skill-bx wow zoomIn" style={{ marginTop: '50px' }}>
              <h2>Skills</h2>
              <p>Below are some of the skills I have developed over the years. Each skill demonstrates my proficiency in various aspects of design and development, showcasing my ability to create innovative solutions and deliver high-quality results. Explore the skills to learn more about my expertise and the technologies I am proficient in.<br /></p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <CircularProgress percentage={80} label="Web Development" />
                </div>
                <div className="item">
                  <CircularProgress percentage={95} label="Java" />
                </div>
                <div className="item">
                  <CircularProgress percentage={80} label="Spring boot" />
                </div>
                <div className="item">
                  <CircularProgress percentage={85} label="Microservices" />
                </div>
                <div className="item">
                  <CircularProgress percentage={65} label="JavaScript" />
                </div>
                <div className="item">
                  <CircularProgress percentage={60} label="React" />
                </div>
                <div className="item">
                  <CircularProgress percentage={85} label="Automation" />
                </div>
                <div className="item">
                  <CircularProgress percentage={90} label="Selenium" />
                </div>
                <div className="item">
                  <CircularProgress percentage={65} label="Database Managemnet" />
                </div>
                <div className="item">
                  <CircularProgress percentage={75} label="CI/CD" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};

export default Skills;
