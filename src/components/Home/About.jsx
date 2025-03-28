import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
  <Col md={8} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
      LET ME <span className="yellow"> INTRODUCE </span> MYSELF
    </h1>
    <p className="home-about-body">
      Hi, my name is <span className="yellow">Tamilselvan Rangasamy</span> and I'm from <span className="yellow">Chennai, Tamilnadu</span>
      <br />
      <br />
      I recently graduated with a Master's degree in Engineering Design in 2024.
      <br />
      <br />
      As a <b className="yellow">React</b> developer, I enjoy tackling new challenges and continuously expanding my skill set.
      <br />
      <br />
      A highly experienced and skilled <b className="yellow">React developer</b> with a passion for building scalable, efficient, and robust applications. Proficient in <b className="yellow">TypeScript</b> and <b className="yellow">Next.js</b>, I create modern, scalable web applications with enhanced type safety and performance. I craft visually stunning and responsive interfaces using <b className="yellow">Material UI</b> and <b className="yellow">Tailwind CSS</b>, ensuring a seamless user experience.
      <br />
      <br />
      With expertise in <b className="yellow">Jest</b> and <b className="yellow">Enzyme</b>, I ensure top-notch code quality through rigorous and comprehensive unit testing. My skills include modular component-driven architecture, effective state management, and optimized performance for modern web applications.
      <br />
      <br />
      I am also passionate about working with <b className="yellow">Node.js</b>, <b className="yellow">MongoDB</b>, and modern JavaScript libraries and frameworks like <b className="yellow">React.js</b>.
      <br />
      <br />
      I am also interested in building new <b className="yellow">Web Technologies and Products</b>, as well as exploring areas related to <b className="yellow">Artificial Intelligence</b>.
      <br />
    </p>
  </Col>
  <Col md={4} className="myAvtar">
    <Tilt>
      <img src={LaptopImg} className="img-fluid" alt="avatar" />
    </Tilt>
  </Col>
</Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/tamilselvanrangasamy/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/tamilselvantsr3?t=kFTaG-DFbThoJ4SaPtGU4A&s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tamilselvan-rangasamy-8109141a0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/this_is_tsr?igshid=ZDdkNTZiNTM="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );

}

export default About