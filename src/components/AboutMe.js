import React from 'react';
import backgroundImg from "../assets/img/BackGround4.jpg";
import myImage from "../assets/img/Sakshi Bhavsar.jpeg";

export const AboutMe = () => {
  return (
    <section 
      className="aboutMe" 
      id="aboutMe" 
      style={{ 
        backgroundImage: `url(${backgroundImg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        color: '#fff' 
      }}
    >
      <div className="container py-5">
        <div className="row text-center mb-4">
          <div className="col-12">
            <h1 className="display-4">ABOUT ME</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4 text-center position-relative">
            <div className="image-overlay">
              <span className="image-text">SAKSHI BHAVSAR</span>
            </div>
            <img src={myImage} alt="My Image" className="img-fluid grayscale-image" />
          </div>
          <div className="col-md-6 mb-4">
            <h3>A Bit About Myself</h3>
            <p className='mb-4'>
              Hey there! I'm Sakshi Bhavsar, a passionate Full Stack Java Developer with a knack for creating 
              cutting-edge digital solutions. Based in the bustling city of Bangalore, India, I'm skilled in both front-end and 
              back-end development, database management, and a variety of development tools. My expertise spans Java, Spring Boot, React.js, and other modern technologies.
              I flourish in team environments and am dedicated to continuous learning and innovation in the tech industry.
            </p>
            <h3>WORK TIMELINE</h3>
            <ul className='mb-4'>
              <li>Java Developer at CMS Computers Ltd (2021 - Present)</li>
            </ul>
            <h3>CONTACT</h3>
            <p>Mobile No: 9423944227</p>
            <p>Email: <a href="sakshibhavsar2018@gmail.com" style={{ color: '#fff' }}>Sakshibhavsar2018@gmail.com</a></p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h1>SERVICES</h1>
            <h3>Front-end Development</h3>
            <p>Creating responsive and dynamic user interfaces using React.js, HTML5, CSS3, and JavaScript (ES6+).
            </p>
          </div>
          <div className="col-md-6 mb-4">
           <h1></h1>
            <h3>Back-end Development</h3>
            <p>Designing and developing robust server-side applications with Spring Boot, RESTful API Design. Microservices Architecture, MVC, and Hibernate.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h3>Database Management</h3>
             <p>Optimizing data storage and retrieval using MySQL. MongoDB, PostgreSQL, and Microsoft SQL Server management</p>
          </div>
          <div className="col-md-6 mb-4">
            <h3>Development Tools</h3>
           <p>Implementing efficient development workflows with Git, Docker, Jenkins CI/CD and JIRA.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h3>UI & UX Design</h3>
            <p>Enhancing user interfaces with intuitive designs to im- prove user experience and engagement.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <h3>Application Security</h3>
            <p>Integrating robust security measures, such as OAuth 2.0 and JWT tokens, to protect server-side APIs and ensure application security.
            </p>
          </div>
        </div>
        <div className="row">
        <div className="col-md-6 mb-4">
            <h3>Continuous Integration and Deployment (CI/CD)</h3>
            <p>Setting up CI/CD pipelines to automate software deliv- ery processes, ensuring faster and more reliable deployments.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <h3>Automation Testing</h3>
            <p>Automation testing, particularly with Selenium and associated frameworks like JUnit, TestNG, Page Object Model (POM), Cucumber, and RestAssured, revolutionizes software testing by enhancing reliability and efficiency across various platforms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
