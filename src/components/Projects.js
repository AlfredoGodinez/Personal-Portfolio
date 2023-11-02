import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import oracle from "../assets/img/Oracle-logo.png";
import sonder from "../assets/img/sonder.jpg";
import ps from "../assets/img/ps.png";
import itesm from "../assets/img/tec.png";

export const Projects = () => {
  const projects = [
    {
      title: "Note Management System",
      description: "NMS that allows users to create, read, update, and delete notes.",
      imgUrl: projImg1,
    },
    {
      title: "Easy Responsive",
      description: "Automatic responsive generator",
      imgUrl: projImg2,
    },
    {
      title: "Java Online Store",
      description: "Online Store",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Some personal projects and companies in which I have participated as a software engineer.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Professional experience</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="container text-center">
                          <div className="skill-tech mt-5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="item" style={{ margin: "0 100px" }}>
                              <img src={oracle} title="Oracle" style={{ width: "100px", height: "auto" }} />
                            </div>
                            <div className="item" style={{ margin: "0 100px" }}>
                              <img src={ps} title="Punto Software" style={{ width: "100px", height: "auto" }} />
                            </div>
                            <div className="item" style={{ margin: "0 100px" }}>
                              <img src={sonder} title="SonderMut" style={{ width: "40px", height: "auto" }} />
                            </div>
                            <div className="item" style={{ margin: "0 100px" }}>
                              <img src={itesm} title="Tec de Monterrey" style={{ width: "70px", height: "auto" }} />
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};