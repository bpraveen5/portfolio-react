import React from "react";
import "./Experience.css";
import Exp from '../../assets/Exp.png'

const Experience = () => {
  return (
    <section id ='experience' className="experience-section">
      <h2 className="experience-title">
        <span>My</span> Work Experience
      </h2>
      <div className="experience-container">
        <div className="experience-card">
          <img
            src={Exp}
            alt="Coder"
            className="experience-image"
          />
          <div className="experience-content">
            <h3>Java Full Stack Developer Intern</h3>
            <p>
            Worked with Java, Spring Boot, Spring Security. Hibernate, JSP, Servlets, Microservices, React.js. 
            Developed RESTful APIs, implemented Microservices using Eureka, and built a responsive UI using React.js, 
            HTML, CSS, and JavaScript.Gained exposure to the full software development lifecycle (SDLC), 
            including requirement analysis, coding, testing, and deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
