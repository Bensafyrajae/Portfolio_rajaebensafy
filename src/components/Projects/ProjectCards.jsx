import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProjectCards(props) {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
    });
  }, []);

  
  const animationDirection = props.direction === 'left' ? 'fade-left' : 'fade-right';

  return (
    <Card className="project-card-view" data-aos={animationDirection}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />

    </Card>
  );
}

export default ProjectCards;
