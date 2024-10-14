import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {
  DiJavascript1,
  DiReact,
 
  DiPython,
  DiGit,
  DiJava,
  DiBootstrap,
  DiHtml5,
  DiCss3,
} from "react-icons/di";

import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  useEffect(() => {
    AOS.init({
        duration: 2000, 
    });
}, []);
  return (
    <Row data-aos="fade-down"  style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiCss3/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiBootstrap/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
