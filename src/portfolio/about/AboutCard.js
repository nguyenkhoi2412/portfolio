import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Khoi Nguyen </span> - I
            have over 10 years experience in web application development,{" "}
            <span className="purple">
              especially in Front-end Web Development.
            </span>{" "}
            I develop HTML / CSS / and javascript coding, making the site
            responsive and friendlier to smaller devices as well as improving
            performance.
            <br />
            <br />
            I like what I’m currently doing (Web Development!…). Challenging
            myself to learn new things and expanding my skillset - my driving
            force.
            <br />
            <br />
            Additionally, I am currently employed as a software developer at
            Stepmedia Software Viet Nam.
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
