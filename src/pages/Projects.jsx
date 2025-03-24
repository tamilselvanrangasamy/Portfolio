import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import college from "../assets/projects/college.png";
import music from "../assets/projects/Music.png";
import hosting from "../assets/projects/Hosting.png";
import ecommerce from "../assets/projects/ecommerce.png";
import agreed from "../assets/projects/agreedpro.png";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agreed}
              isBlog={false}
              title="AgreedPro"
              description="AgreedPro is an AI-powered contract management platform designed to streamline the creation, negotiation, and management of contracts for small and medium-sized businesses. It offers features such as AI-assisted document generation, efficient redlining, electronic signatures, automated reminders, quick search capabilities, centralized storage, and robust data security. The platform aims to simplify complex contract processes, enhance productivity, and ensure compliance with legal standards."
              demoLink="https://agreedpro.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E‑Commerce Website"
              description="This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process. The admin panel, accessible for CRUD on users and products, includes a chart for statistics display. Stripe API is integrated to handle customer payments. The website uses MongoDB and Firebase as the database."
              ghLink="https://github.com/tamilselvanrangasamy/E-Commerce"
              demoLink="https://tsrecommerce.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Music"
              description="To design and develop a personal music player web application using React.js, featuring a clean and intuitive user interface. The project includes integrating audio playback functionalities, creating custom playlists, and implementing responsive design principles for optimal performance across various devices. The application leverages React's state management to ensure seamless control and playback of music tracks, offering a user-centric experience tailored to personal music preferences."
              ghLink="https://github.com/tamilselvanrangasamy/Project-Music"
              demoLink="https://tsrmusic.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hosting}
              isBlog={false}
              title="Hosting"
              description="Web hosting is a service that enables individuals and organizations to make their websites accessible via the World Wide Web. Web hosts are companies that provide space on a server they own or lease for client use, along with providing internet connectivity This project aims to create a static website that provides information about web hosting services using HTML and CSS. The website will educate visitors on different types of hosting, their benefits, and recommendations for hosting providers. "
              ghLink="https://github.com/tamilselvanrangasamy/Hosting_"
              demoLink="https://tsrhosting.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={college}
              isBlog={false}
              title="College"
              description="This project involves creating a dedicated website for showcasing the activities and courses offered by a college using HTML and CSS. The website will provide detailed information about various extracurricular activities and academic courses available to students. The aim is to create an engaging and informative platform for current and prospective students."
              ghLink="https://github.com/tamilselvanrangasamy/Bootstrap"
              demoLink="https://tsrcet.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
