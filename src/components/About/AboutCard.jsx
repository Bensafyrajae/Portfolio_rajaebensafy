import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rajae Bensafy </span>
            from <span className="purple"> Casablanca, Morroco.</span>
            <br />
       I am currently continuing my first year of advanced studies in Web Engineering, <br />
        I have a solid foundation in Mathematics and Computer Science, with a specialization in database management and full-stack web development.<br />My technical expertise includes PHP (Laravel), ReactJS, HTML/CSS, JavaScript, MySQL and Git for version control. I am adaptable, proactive and driven by a strong sense of initiative. I thrive in team environments and enjoy solving complex problems.
                   
                    </p>
          
          
          <footer className="blockquote-footer">Rajae Bensafy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
