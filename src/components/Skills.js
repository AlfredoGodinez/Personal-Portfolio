import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Import all icons and images
import java from '../assets/icons/java.png';
import js from '../assets/icons/js.png';
import swift from '../assets/icons/swift.png';
import py from '../assets/icons/py.png';
import c from '../assets/icons/c.png';
import r from '../assets/icons/r.png';

import tw from '../assets/icons/tw.png';
import comm from '../assets/icons/comm.png';
import solv from '../assets/icons/solv.png';
import tree from '../assets/icons/tree.png';
import time from '../assets/icons/time.png';

import git from '../assets/icons/git.png';
import react from '../assets/icons/react.png';
import css from '../assets/icons/css.png';
import node from '../assets/icons/nodejs.png';
import knex from '../assets/icons/knex.png';
import sql from '../assets/icons/sql.png';
import apex from '../assets/icons/apex.png';

import arrow1 from '../assets/img/arrow1.svg';
import arrow2 from '../assets/img/arrow2.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col xs={6}>
            <div className="skill-bx wow zoomIn">
              <h2>Technical Skills</h2>
              <p>These are some of the languages I have worked with throughout my school and professional career.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={java} alt="Java" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={js} alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={swift} alt="Swift" />
                  <h5>Swift</h5>
                </div>
                <div className="item">
                  <img src={py} alt="Python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={c} alt="C" />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img src={r} alt="R" />
                  <h5>R</h5>
                </div>
              </Carousel>
            </div>
          </Col>
          <Col xs={6}>
            <div className="skill-bx wow zoomIn">
              <h2>Soft Skills</h2>
              <p>These are some of the soft skills that I have obtained throughout my school and professional career.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={tw} alt="Teamwork" />
                  <h6>Team work</h6>
                </div>
                <div className="item">
                  <img src={comm} alt="Communication" />
                  <h6>Communication</h6>
                </div>
                <div className="item">
                  <img src={solv} alt="Problem Solving" />
                  <h6>Problem Solving</h6>
                </div>
                <div className="item">
                  <img src={tree} alt="Adaptability" />
                  <h6>Adaptability</h6>
                </div>
                <div className="item">
                  <img src={time} alt="Time Management" />
                  <h6>Time Management</h6>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
        <div className="container text-center">
          <div className="skill-tech mt-5">
            <h4>Technologies</h4>
            <div className="d-flex justify-content-end mt-5">
              <div className="item">
                <img src={git} alt="Git" title="Git" />
              </div>
              <div className="item">
                <img src={react} alt="React" title="React" />
              </div>
              <div className="item">
                <img src={css} alt="CSS" title="CSS" />
              </div>
              <div className="item">
                <img src={node} alt="Node.js" title="Node.js" />
              </div>
              <div className="item">
                <img src={knex} alt="Knex" title="Knex" />
              </div>
              <div className="item">
                <img src={sql} alt="SQL" title="SQL" />
              </div>
              <div className="item">
                <img src={apex} alt="Apex" title="Apex" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Color Sharp" />
    </section>
  );
};
