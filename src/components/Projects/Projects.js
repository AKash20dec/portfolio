import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import p3 from "../../Assets/Projects/project3.png";
import p5 from "../../Assets/Projects/project5.jpg";
import p1 from "../../Assets/Projects/project1.png";
import p4 from "../../Assets/Projects/project4.jpg";
import p2 from "../../Assets/Projects/project2.png";

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
              imgPath={p1}
              isBlog={false}
              title="Vintage Store"
              description="E-commerce Website. Old furniture Buy and Sell website .
A Responsive webpage in which a user can sell the product and buy it.
"
              ghLink="https://github.com/AKash20dec/Vintage-Store"
              demoLink="https://vintage-store-furniture.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p2}
              isBlog={false}
              title="Product website - Clean sweep"
              description="Made for the company to showcase their cleaning products."
              ghLink="https://github.com/AKash20dec/clean_sweep"
              demoLink="https://clean-sweep-gamma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p5}
              isBlog={false}
              title="Blog App"
              description="A Blogging website for writing and displaying the blogs to users .
                      SKILLS - Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, JavaScript"
              ghLink="https://github.com/AKash20dec/blogapp"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p3}
              isBlog={false}
              title="Todo App"
              description="CRUD operation and state management using Redux toolkit and React.js"
              ghLink="https://github.com/AKash20dec/Todo-reduxtoolkit"
              demoLink="https://todo-reduxtoolkit-eta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p4}
              isBlog={false}
              title="React Basic Projects"
              description="Using All the fundamentals of react.js and Next.js using all the hooks ."
              ghLink="https://github.com/AKash20dec/reactBasicProjects"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
