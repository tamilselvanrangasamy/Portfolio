import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <span>There is always one more bug to fix.</span>
        </Col>
        <Col md="4" className="footer-copywright">
          <span>Copyright © {year}</span>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons"> 
            <li className="social-icons">
              <a
                href="https://github.com/tamilselvanrangasamy/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/tamilselvantsr3?t=kFTaG-DFbThoJ4SaPtGU4A&s=09"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/tamilselvan-rangasamy-8109141a0"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://instagram.com/this_is_tsr?igshid=ZDdkNTZiNTM="
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="leetcode"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer