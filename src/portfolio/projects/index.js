import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import apptifact from "@assets/portfolio/Projects/apptifact.svg";
import stepMedia from "@assets/portfolio/Projects/stepmedia.jpg";
import conexus from "@assets/portfolio/Projects/conexus.jpg";
import orient from "@assets/portfolio/Projects/orientsoftware.jpg";
import vns from "@assets/portfolio/Projects/vns.jpg";
import fpt from "@assets/portfolio/Projects/fpttelecom.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Work <strong className="purple">Experience </strong>
        </h1>
        <p>Here are a few places I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col sm={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={apptifact}
              isBlog={false}
              title={
                "Vietnam's IT Outsourcing Leader <br />(" + 
                calculatePeriodOfWork("2024-06-16") + ")"
              }
              subTitle="06/2024 - Current"
              description="
              <br />- Back-end: SQL Server, basic platform .NET core, C#, ASP.NET, Razor...
              <br />- Front-end: HTML, SCSS, javascript, Bootstrap, Mui-UI, ReactJs, NextJs, Typescript, Redux, Webpack...
              <br />- Apptifact is a project outsourcing company in Korea. I have participated and developed some outsourcing projects of the company.
              <br />- Code reviews and mentoring, share knowledge within the team, and mentor junior developers.
              <br />- Main Project: GeoYoung Pharmacy, pharmaceutical and healthcare delivery management system, including functions such as order management, warehousing, distribution, and third-party API integration.
              <br />- Build interactive user interfaces (UI) using Nextjs... Integrate APIs to synchronize data with GeoYoung's system, optimize performance and ensure security for the entire application."
            />
          </Col>

          <Col sm={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={stepMedia}
              isBlog={false}
              title={
                "Stepmedia Software Viet Nam <br />(2 years 8 months)"
                // calculatePeriodOfWork("2021-10-25") +
              }
              subTitle="10/2021 - 06/2024"
              description="<br />- Development website application using MVC, SQL
              Server on basic platform .NET CORE, C#, MSSQL, Azure.
              <br />
              - Front-end is using REACTJS, SASS...
              <br />
              - Company product development Deloitte, maintain
              and develop new features according to customer,
              reports, improve performance for APIs, troubleshooting
              to perfect products...
              <br />
              - Test and write unit tests.
              <br />
              - Tracing error in application insights."
            />
          </Col>

          <Col sm={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={conexus}
              isBlog={false}
              title="CONEXUS VIET NAM <br />(2 years 9 months)"
              subTitle="01/2018 - 09/2020"
              description="<br />Conexus is a Global Edu Tech company in Norway. I am honor to be a member in the development team to build and develop an Enterprise Edu Tech project for Singapore market:
              <br />
              - Project domain: Unified Education and Training System - users can use the system to organize learning courses, plan education and training programs for departments/organizations inside, host and manage e-learning sessions, review/assess/forecast learning courses and training programs."
            />
          </Col>

          <Col sm={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={orient}
              isBlog={false}
              title="Orient Software Development Corp. <br />(5 years 3 months)"
              subTitle="11/2012 - 01/2018"
              description="<br />- Development website application using MVC, SQL
              Server on basic platform .NET 4.0, 4.5...
              <br />
              - My specialize is develop UI with script, jquery, css
              responsive...
              <br />
              - Project domain: Unified Education and Training System - users can use the system to organize learning courses, plan education and training programs for departments/organizations inside, host and manage e-learning sessions, review/assess/forecast learning courses and training programs."
            />
          </Col>

          <Col sm={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={vns}
              isBlog={false}
              title="VIEN NAM SOFTWARE <br />(1 year 6 months)"
              subTitle="06/2011 - 11/2012"
              description="<br />- Programing projects websites for clients.
              <br />
              - Analysis, programming and development website
              application on the basic platform .NET 2.0, 3.5, 4.0...
              using ASP.NET, MVC, Entity Framework, Web services,
              html, jquery, css..."
            />
          </Col>

          <Col sm={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={fpt}
              isBlog={false}
              title="FPT TELECOM <br />(2 years 1 month)"
              subTitle="01/2008 - 01/2010"
              description="<br />- Support clients about ADSL, LAN, WAN. Check client&s
              connection on system, check information and all services
              assigned to clients.<br />
              - Support all problems that IT need to solve about Web
              server, mail server, FTP, IP static, NAT and troubleshoot
              IT&s problems."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

const calculatePeriodOfWork = (date) => {
  var startDate = new Date(date);
  var diffDate = new Date(new Date() - startDate);
  return (
    diffDate.toISOString().slice(0, 4) -
    1970 +
    " years " +
    diffDate.getMonth() +
    " months "
    // + (diffDate.getDate() - 1) +
    // "D"
  );
};

export default Projects;
