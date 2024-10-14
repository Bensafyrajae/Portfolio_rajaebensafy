import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
          <Col md={4} className="project-card" direction="left">
            <ProjectCard
              imgPath={chatify}
             
            />
          </Col>

          <Col md={4} className="project-card" direction="left">
            <ProjectCard
              imgPath={bitsOfCode}
             
            />
          </Col>

          <Col md={4} className="project-card" direction="right">
            <ProjectCard
              imgPath={editor}
                        
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
