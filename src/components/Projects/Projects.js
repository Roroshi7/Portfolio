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
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CartMax"
              description="CartMax is a full-featured e-commerce platform built using React.js Tailwind CSS Node.js Express.js and MongoDB. It allows users to browse and search for products register and log in securely add items to their shopping cart and complete orders through a seamless checkout process. The application features dynamic product listings a popular products section and well-designed Home and About pages. User authentication is handled with secure JWT tokens and all user data product details and order information are stored in MongoDB. Admin users have access to a protected dashboard where they can manage products users and orders. The project includes responsive UI smooth UX and role-based access control making it a robust and modern online shopping experience."
              ghLink="https://github.com/Roroshi7/CartMax.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TaskManagar"
              description="TaskManager is a task management web application built using React.js Tailwind CSS Node.js Express.js and MongoDB Atlas. It allows users to register and log in securely using JWT-based authentication and manage their daily tasks efficiently. Users can create update and delete tasks set priority levels due dates and track task status. The platform includes a user-friendly dashboard that visually represents task statistics using Chart.js helping users monitor productivity. Advanced filtering options enable users to view tasks based on status or priority. The application features a clean responsive interface and offers a seamless experience across devices."
              ghLink="https://github.com/Roroshi7/TaskManager.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CareerLink"
              description="CareerLink is an AI-powered career development platform built using Next.js Tailwind CSS Node.js Express.js and MongoDB. It helps users navigate their career paths by offering tools like an AI Career Advisor Resume Builder Interview Preparation Bot and Career Roadmaps. Users can receive personalized career guidance generate professional resume content explore role-based learning paths and practice mock interviews with AI-generated questions and instant feedback. The platform uses AI models integrated via APIs to deliver tailored recommendations. It features secure user authentication through Clerk with support for Google LinkedIn and email logins. CareerLink provides a smooth responsive user experience and is designed to support users in achieving their career goals."
              ghLink="https://github.com/PrathamShenoy14/CareerLink.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="StayFinder"
              description="StayFinder is a full-stack rental platform inspired by Airbnb, built using the MERN stack: MongoDB, Express.js, React.js, and Node.js. It allows users to discover, list, and book short-term or long-term stays with ease. The platform features property listings with detailed descriptions, real-time availability, and filtering based on location, price, and amenities. StayFinder offers secure user authentication and role-based access for guests and hosts, enabling users to register, log in, manage bookings, and list properties. The backend is powered by RESTful APIs and MongoDB for scalable data storage, while the frontend ensures a responsive and smooth user experience. Designed with usability in mind, StayFinder helps users find their perfect stay or monetize their space effortlessly."
              ghLink="https://github.com/Roroshi7/StayFinder.git"
              demoLink="https://68539a879ad995b50699b1be--stayfinder7.netlify.app/login"
            />
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
