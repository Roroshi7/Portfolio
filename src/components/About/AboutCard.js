import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Roshan Shiroorkar </span>
            from <span className="blue"> Mumbai, India.</span>
            <br />
            I am currently a 4th year cpmputer engineering student at KJ Somaiya College of Engineering.
            <br />
            I am currently pursuing an undergraduate degree of B.tech in Computer Engineering at KJ Somaiya College of Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Create with purpose, build with impact"{" "}
          </p>
          <footer className="blockquote-footer">Roshan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
