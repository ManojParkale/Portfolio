import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bitsOfCode from "../../Assets/Projects/blog.png";
import netflix from "../../Assets/Projects/netflix.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Login Page"
              description="This repository contains a simple clone of the Netflix login page, implemented using React, JavaScript, and Bootstrap. The project demonstrates how to create a modern and responsive login interface inspired by Netflix's design."
              ghLink="https://github.com/ManojParkale/Netflix-Login-Page"
            />
          </Col>

 {/*         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/ManojParkale/Bits-0f-C0de"
              demoLink="https://"
            />
          </Col>
          */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;