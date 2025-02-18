import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import zity from "../../Assets/Projects/zity.png";
import Zitylot from "../../Assets/Projects/zitylot.png";
import pychat from "../../Assets/Projects/pychat.png";

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
              imgPath={zity}
              isBlog={false}
              title="Zity"
              description="ZiTy is a microservice-based apartment management system that optimizes community housing operations. It offers apartment and resident management, payment tracking, locker management, community surveys, and Momo payments. ZiTy also integrates third-party services like Cloudinary for images, SMS notifications, and Momo for transactions."
              ghLink="https://github.com/BuiBao3103/ZiTy"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Zitylot}
              isBlog={false}
              title="Zitylot"
              description="Zitylot is a C#-based parking management software that integrates WinForms with hardware like cameras, RFID readers, and Arduino for seamless software-hardware connectivity. It features intelligent license plate recognition for automatic data retrieval, offering an efficient and innovative solution for residential parking management."
              ghLink="https://github.com/BuiBao3103/ZiTyLot"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pychat}
              isBlog={false}
              title="Pychat"
              description="PyChat is a real-time web chat application developed with Python, leveraging Socket.IO for instant and seamless communication. It offers more than just text messaging, integrating features like image sharing, friend requests, and user blocking to enrich the chat experience."
              ghLink="https://github.com/BuiBao3103/PyChat"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
