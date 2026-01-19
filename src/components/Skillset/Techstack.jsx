import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiCss3,
  DiMysql,
  DiHtml5,
} from "react-icons/di";
import {
  SiMaterialui,
  SiRedux,
  SiMongodb,
  SiTypescript,
  SiJest,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiFastapi,
} from "react-icons/si";

const Techstack = () => {
  return (
    <>
      <Row style={{ paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiHtml5 />
          <h4>HTML</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiCss3 />
          <h4>CSS</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
          <h4>Javascript</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript />
          <h4>Typescript</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
          <h4>React</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs />
          <h4>Next</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMaterialui />
          <h4>Material UI</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiRedux />
          <h4>Redux</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTailwindcss />
          <h4>Tailwind CSS</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiMysql />
          <h4>MySQL</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
          <h4>Node JS</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiExpress />
          <h4>Express JS</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFastapi />
          <h4>Fast API</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMongodb />
          <h4>MongoDB</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJest />
          <h4>Jest</h4>
        </Col>
      </Row>
    </>
  );
}

export default Techstack;

