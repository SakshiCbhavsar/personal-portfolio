import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projectImge1 from "../assets/img/project-img_1 (1).png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/Eccomarce_Backend2.jpg";
import projImg3 from "../assets/img/Reach_My_india_Img.png";
import projImg4 from "../assets/img/LoginService.jpg";
import projImg5 from "../assets/img/project-img2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Ecommerce website",
      description: "Design & Development Using React",
      imgUrl: projectImge1,
      url: "https://github.com/SakshiCbhavsar/e-commerce-application-react",
    },
    {
      title: "Ecommerce Website",
      description: "Develop ecommerce website backend Using Springboot",
      imgUrl: projImg2,
      url: "https://github.com/SakshiCbhavsar/e-commerce-backend-springboot",
    },
    {
      title: "Reach My India",
      description: "Selenium Automation Script",
      imgUrl: projImg3,
      url: "https://github.com/SakshiCbhavsar/ReachMyIndia",
    },
    {
      title: "Login Service",
      description: "Developed Login Service backend Using JWT Authentication Token",
      imgUrl: projImg4,
      url: "https://github.com/SakshiCbhavsar/login-service-jwt",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
      url: "https://github.com/yourusername/business-startup-2",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      url: "https://github.com/yourusername/business-startup-3",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Below are some of the projects I have worked on. Each project showcases my skills in design and development, highlighting my ability to create innovative solutions and deliver high-quality results. Explore the projects to learn more about my work and the technologies I've used.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};

export default Projects;
