import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
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
              imgPath={stepMedia}
              isBlog={false}
              title={
                "Stepmedia Software Viet Nam <br />(" +
                calculatePeriodOfWork("2021-10-25") +
                ")"
              }
              subTitle="01/2022 - Current"
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
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
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
